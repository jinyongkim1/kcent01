const keys = require('../../config/keys');

module.exports = ad => {
  return `
    <html>
      <body>
        <div style="tex-align: center;">
          <h3>광고 문의드립니다.</h3>
          <p>비용은 다음과 같습니다:</p>
          <p>${ad.body}</p>
          <p> 참여하시겠습니까? </p>
          <div>
            <a href="${keys.redirectDomain}/api/ads/${ad.id}/yes">네</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/ads/${ad.id}/no">아니요</a>
          </div>
        </div>
      </body>x
    </html>
  `;
};
