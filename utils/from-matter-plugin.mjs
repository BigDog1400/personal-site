import matter from "gray-matter";
import stringifyObject from "stringify-object";

// module.exports = () => (tree, file) => {
export const frontMatterPlugin =
  () =>
  /** @param {import('@types/mdast').Root} tree */
  (tree, file) => {
    console.log(JSON.stringify(tree.children[0], null, 2));
    console.log(
      JSON.stringify(tree.children[tree.children.length - 1], null, 2),
    );

    const { data } = matter(file.value);

    // Step 2: Remove frontmatter after converting it into JS object
    if (tree.children[0].type === "thematicBreak") {
      const firstHeadingIndex = tree.children.findIndex(
        (t) => t.type === "heading",
      );
      if (firstHeadingIndex !== -1) {
        tree.children.splice(0, firstHeadingIndex + 1);
      }
    }

    // Step 3: Insert JSX to pass frontmatter to parent component
    tree.children.unshift({
      type: "mdxjsEsm",
      value: `
        import { BlogLayoutPage } from "../../components/blog-layout.tsx";'
      `,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ImportDeclaration",
              specifiers: [
                {
                  type: "ImportSpecifier",
                  local: { type: "Identifier", name: "BlogLayoutPage" },
                  imported: { type: "Identifier", name: "BlogLayoutPage" },
                },
              ],
              source: {
                type: "Literal",
                value: "../../components/blog-layout.tsx",
                raw: '"../../components/blog-layout.tsx"',
              },
            },
          ],
          sourceType: "module",
        },
      },
    });

    tree.children.push({
      type: "mdxjsEsm",
      value: `export default ({ children }) => <BlogLayoutPage meta={meta}>{children}</BlogLayoutPage>;`,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExportDefaultDeclaration",
              declaration: {
                type: "ArrowFunctionExpression",
                params: [
                  {
                    type: "ObjectPattern",
                    properties: [
                      {
                        type: "Property",
                        key: { type: "Identifier", name: "children" },
                        value: { type: "Identifier", name: "children" },
                        kind: "init",
                        computed: false,
                        method: false,
                        shorthand: true,
                      },
                    ],
                  },
                ],
                body: {
                  type: "JSXElement",
                  openingElement: {
                    type: "JSXOpeningElement",
                    name: { type: "JSXIdentifier", name: "BlogLayoutPage" },
                    attributes: [
                      {
                        type: "JSXAttribute",
                        name: { type: "JSXIdentifier", name: "meta" },
                        value: {
                          type: "JSXExpressionContainer",
                          expression: { type: "Identifier", name: "meta" },
                        },
                      },
                    ],
                    selfClosing: false,
                  },
                  closingElement: {
                    type: "JSXClosingElement",
                    name: { type: "JSXIdentifier", name: "BlogLayoutPage" },
                  },
                  children: [
                    {
                      type: "JSXExpressionContainer",
                      expression: { type: "Identifier", name: "children" },
                    },
                  ],
                },
                async: false,
                expression: true,
              },
            },
          ],
          sourceType: "module",
        },
      },
    });

    // // Step 1: Convert frontmatter to JS object and push to document tree
    tree.children.push({
      type: "mdxjsEsm",
      value: `export const meta = ${JSON.stringify(data)};`,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExportNamedDeclaration",
              declaration: {
                type: "VariableDeclaration",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "meta" },
                    init: {
                      type: "ObjectExpression",
                      properties: Object.keys(data).map((key) => ({
                        type: "Property",
                        key: { type: "Identifier", name: key },
                        value: {
                          type: "Literal",
                          value: data[key],
                        },
                        kind: "init",
                        computed: false,
                        method: false,
                        shorthand: false,
                      })),
                    },
                  },
                ],
                kind: "const",
              },
              specifiers: [],
              source: null,
            },
          ],
          sourceType: "module",
        },
      },
    });
  };
