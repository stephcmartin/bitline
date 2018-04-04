import Link from 'next/link';

const Footer = () => (
    <div>
    <ul>
        <li><Link href="/locations"><a>Locations</a></Link></li>
        <li><Link href="/contact"><a>Contact Us</a></Link></li>
    </ul>
    <style jsx>
    {
        `
        ul {
        list-style:none;
        display: flex;
        }
        li{
            margin-right: 15px;
        }`
    }
    </style>
    </div>
)
export default Footer;