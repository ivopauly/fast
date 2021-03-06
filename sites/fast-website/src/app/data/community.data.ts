import DiscordIcon from "svg/icon-discord.svg";
import GithubIcon from "svg/icon-github.svg";
import TwitterIcon from "svg/icon-twitter.svg";
import MediumIcon from "svg/icon-medium.svg";

export interface CommunityContentPlacementData {
    actionLink: string;
    actionText?: string;
    body?: string;
    header?: string;
    icon: string;
}

export const communityContentPlacementData: CommunityContentPlacementData[] = [
    {
        actionLink: "https://discord.gg/FcSNfg4",
        actionText: "Join the Discord Chat",
        body:
            "Join our active community on Discord. Follow the latest updates and contributions, ask questions, give feedback, or keep up on our reading list.",
        header: "Discord",
        icon: DiscordIcon,
    },
    {
        actionLink: "https://twitter.com/FAST_UI",
        actionText: "Follow us on Twitter",
        body:
            "Follow along as we share out the latest happenings on Twitter. You will find important updates, announcements, and sneak peeks.",
        header: "Twitter",
        icon: TwitterIcon,
    },
    {
        actionLink: "https://github.com/microsoft/fast",
        actionText: "Get Started on Github",
        body:
            "Explore the FAST repository on Github and try out our components, utilities, and tools. Or, mix-and-match with your own solutions.",
        header: "Github",
        icon: GithubIcon,
    },
    {
        actionLink: "https://medium.com/fast-design",
        actionText: "Read more on Medium",
        header: "Medium",
        icon: MediumIcon,
    },
];
