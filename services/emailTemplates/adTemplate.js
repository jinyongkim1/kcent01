const keys = require('../../config/keys');

module.exports = ad => {
  return `
    <html>
      <body>
        <div style="tex-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${ad.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/ads/${ad.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/ads/${ad.id}/no">No</a>
          </div>
        </div>
      </body>x
    </html>
  `;
};
