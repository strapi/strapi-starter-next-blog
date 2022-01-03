import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1>Oooopss....</h1>
            <h2>Page Not Found</h2>
            <p>Click <Link href='/'><a>here</a></Link> to go back to the homepage</p>
        </div>
    )
}

export default NotFoundPage