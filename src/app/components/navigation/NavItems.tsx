import Link from "next/link";

interface NavItemsProps {
    link: string,
    name: string,
    key?: string
}

const NavItems = ({link, name, key}: NavItemsProps) => {
    return (
        <li key={key} className="list-none">
            <Link
                className="font-[family-name:var(--font-poppins)] font-semibold text-[2.3rem] sm:text[1rem] md:text-[1rem] text-left hover:text-customBlue"
                href={link}
            >
                {name}
            </Link>
        </li>
    )
}
export default NavItems
