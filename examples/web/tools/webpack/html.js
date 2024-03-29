module.exports = function html(templateParams) {
  const { name, description } = templateParams.htmlWebpackPlugin.options.custom
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="description" content="${description}"/>
        <meta name="charset" content="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>${name} example</title>

        <style type="text/css">
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          .clearfix:after {
             visibility: hidden;
             display: block;
             font-size: 0;
             content: " ";
             clear: both;
             height: 0;
           }
          .clearfix { display: inline-block; }
          /* start commented backslash hack \*/
          * html .clearfix { height: 1%; }
          .clearfix { display: block; }

          .header {
            margin: 30px;
            font-size: 18px;
            font-family: Verdana, sans-serif;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <p style='text-align: center;'>
            <img src='https://raw.githubusercontent.com/procoder17/react-sizeme/master/assets/logo.png' width='350'/>
          </p>

          <p style='text-align: center; margin-top: 20px;'>
            Resize your browser window to see it in action.
          </p>
        </div>

        <div id='app'></div>
      </body>
    </html>`
}
