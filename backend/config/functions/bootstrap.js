"use strict";
require("dotenv").config();
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */
const fs = require("fs");
const path = require("path");
const { articles, categories } = require("../../seed/seed");

const findPublicRole = async () => {
  const result = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });
  return result;
};

const setDefaultPermissions = async () => {
  const role = await findPublicRole();
  const permissions = await strapi
    .query("permission", "users-permissions")
    .find({ type: "application", role: role.id });
  await Promise.all(
    permissions.map(p =>
      strapi
        .query("permission", "users-permissions")
        .update({ id: p.id }, { enabled: true })
    )
  );
};

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup"
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
};

const getFilesizeInBytes = filepath => {
  var stats = fs.statSync(filepath);
  var fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
};

const createSeedData = async () => {
  const categoriesPromises = categories.map(({ ...rest }) => {
    return strapi.services.category.create({
      ...rest
    });
  });
  const articlesPromises = articles.map(article => {
    const { imageFileName, mimeType, ...rest } = article;
    const filepath = `./seed/images/${imageFileName}`;
    const size = getFilesizeInBytes(filepath);
    const image = {
      path: filepath,
      name: imageFileName,
      size,
      type: mimeType
    };
    const files = {
      image
    };
    return strapi.services.article.create(
      {
        author: null,
        ...rest
      },
      { files }
    );
  });
  await Promise.all(categoriesPromises);
  await Promise.all(articlesPromises);
};

module.exports = async () => {
  const shouldSetDefaultPermissions = await isFirstRun();
  if (shouldSetDefaultPermissions) {
    await setDefaultPermissions();
    await createSeedData();
  }
};
