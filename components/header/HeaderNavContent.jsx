import Link from "next/link";
import {
    blogItems,
    candidateItems,
    employerItems,
    findJobItems,
    homeItems,
    pageItems,
    shopItems,
} from "../../data/mainMenuData";
import {
    isActiveParent,
    isActiveLink,
    isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
    const router = useRouter();

    return (
        <>
            <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                    {/* current dropdown */}
                    <li>
                        <span><Link href="/home-10" style={{textDecoration: 'none', color: '#fff'}}>Home</Link></span>
                    </li>
                    {/* End homepage menu items */}

                    <li>
                        <span><Link href="/job-list-v5" style={{textDecoration: 'none', color: '#fff'}}>Find Jobs</Link></span>
                    </li>
                    {/* End findjobs menu items */}

                    <li
                        className={`${
                            isActiveParent(employerItems, router.asPath) ||
                            router.asPath === "/employers-dashboard/dashboard"
                                ? "current"
                                : ""
                        } dropdown`}
                    >
                        <span>Employers</span>
                        <ul>
                            <li
                                className={
                                    isActiveLink(
                                        "/employers-dashboard/post-jobs",
                                        router.asPath
                                    )
                                        ? "current"
                                        : ""
                                }
                            >
                                <Link href="/employers-dashboard/post-jobs">
                                    Employers Dashboard
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* End Employers menu items */}

                    <li
                        className={`${
                            isActiveParent(candidateItems, router.asPath) ||
                            router.asPath === "/candidates-dashboard/post-jobs"
                                ? "current"
                                : ""
                                ? "current"
                                : ""
                        } dropdown`}
                    >
                        <span>Candidates</span>
                        <ul>
                            {candidateItems.map((item) => (
                                <li className="dropdown" key={item.id}>
                                    <span
                                        className={
                                            isActiveParentChaild(
                                                item.items,
                                                router.asPath
                                            )
                                                ? "current"
                                                : ""
                                        }
                                    >
                                        {item.title}
                                    </span>
                                    <ul>
                                        {item.items.map((menu, i) => (
                                            <li
                                                className={
                                                    isActiveLink(
                                                        menu.routePath,
                                                        router.asPath
                                                    )
                                                        ? "current"
                                                        : ""
                                                }
                                                key={i}
                                            >
                                                <Link href={menu.routePath}>
                                                    {menu.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <li
                                className={
                                    router.asPath ===
                                    "/candidates-dashboard/dashboard"
                                        ? "current"
                                        : ""
                                }
                            >
                                <Link href="/candidates-dashboard/my-profile">
                                    Candidates Dashboard
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* End Candidates menu items */}

                </ul>
            </nav>
        </>
    );
};

export default HeaderNavContent;
