"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stupendous ${chalk.red(
          "generator-basic-html"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Project name",
        default: "basic-html"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.log(props);
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const directory = this.props.name;
    this.fs.copy(
      this.templatePath("index.html"),
      this.destinationPath(`${directory}/index.html`)
    );
    this.fs.copy(
      this.templatePath("css/style.css"),
      this.destinationPath(`${directory}/css/style.css`)
    );
    this.fs.copy(
      this.templatePath("js/main.js"),
      this.destinationPath(`${directory}/js/main.js`)
    );
  }

  install() {
    this.installDependencies();
  }
};
