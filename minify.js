const fs = require("fs");
const CleanCSS = require("clean-css");
const stylesheets = ["checka11y.css", "checka11y-errors.css", "checka11y-warnings.css"];

console.log("Running clean-css!");
stylesheets.forEach(filename => {
    let minifiedFile = `${filename.slice(0, -4)}-minified.css`;
    console.log(`Generating ${minifiedFile}`);
    fs.readFile(`./${filename}`, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // minify each stylesheet and write it to the appropriate minified sheet
        // todo: replace {} with config options if we want (e.g use beautify or other formatting options)
        // https://www.npmjs.com/package/clean-css#formatting-options
        let styles = new CleanCSS({}).minify(data).styles;

        // we can write the minified CSS to respective files, discuss this
        fs.writeFile(`./${minifiedFile}`, styles, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
});