import { defineConfig } from "vitepress";

const markdownCodeAnchorPlugin = (md) => {
    const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        const code = token.content.trim();
        const lang = token.info.trim();

        let title = "";

        // Look for heading before the code block
        for (let i = idx - 1; i >= 0; i--) {
            if (tokens[i].type === "heading_open") {
                // Extract text from heading content
                title = tokens[i + 1].content.trim();
                break;
            }
        }

        if (lang === "js") {
            const anchorLink = `<a class="code-anchor" href="${encodeURI(
                code
            )}">${title}</a>`;
            const codeBlock = defaultRender(tokens, idx, options, env, slf);

            return `<div>${codeBlock}<p><sub>LINK:</sub></p>${anchorLink}</div>`;
        }

        return defaultRender(tokens, idx, options, env, slf);
    };
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/awesome-bookmarklets/",
    title: "Awesome Bookmarklets",
    description:
        "Awesome Bookmarklets, a curated collection of powerful and handy bookmarklets to enhance your browsing experience.",

    markdown: {
        config(md) {
            md.use(markdownCodeAnchorPlugin);
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            {
                text: "Github",
                link: "https://github.com/plsankar/awesome-bookmarklets",
            },
            {
                text: "Contribute",
                link: "https://github.com/plsankar/awesome-bookmarklets",
            },
        ],
        outline: "deep",
        sidebar: [
            {
                text: "Home",
                link: "/",
            },
        ],
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/plsankar/awesome-bookmarklets",
            },
        ],
    },
    srcExclude: ["README.md"],
});
