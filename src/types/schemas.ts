export type MarkdownProps = {
    node: {
        id: string;
        frontmatter: {
            spoiler: string;
            title: string;
            path: string;
            date: string;
            thumbnail: {
                absolutePath: string,
                publicURL: string,
            };
            thumbnailThin: { 
                absolutePath: string,
                publicURL: string,
            };
            image: {
                absolutePath: string,
                publicURL: string,
            };
            tags: string[];
        },
        html: string;
    }
}