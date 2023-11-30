module.exports = function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "请输入leetcode的题目名称",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "请输入leetcode的题目名称",
      },
      {
        type: "input",
        name: "link",
        message: "请输入leetcode的题目链接",
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入leetcode的function name',
      }
    ],
    actions: ({ title, name, link }) => [
      {
        type: "add",
        path: "src/{{title}}/index.ts",
        templateFile: "templates/index.hbs",
        data: {
          title,
          link,
          name,
        },
      },
      {
        type: "add",
        path: "src/{{title}}/test.spec.js",
        templateFile: "templates/test.spec.hbs",
        data: {
          title,
          link,
          name,
        },
      },
    ],
  });
};
