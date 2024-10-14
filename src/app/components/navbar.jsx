import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex backdrop-blur-md justify-between p-3 px-10 m-3 border border-white/25 bg-white/5 rounded-lg">
            <Image alt="ACM MPSTME" src="/acm_pfe.svg" width="60" height="60"/>
            <Image alt="TRC MPSTME" src="/trc.svg" width="60" height="60" />
        </div>
    )
}

export default Navbar;