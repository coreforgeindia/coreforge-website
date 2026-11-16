<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | CoreForge Bengaluru</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            color: #0a0a0a;
            background-color: #fafafa;
            line-height: 1.6;
            padding: 30px 20px;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border: 3px solid #000000;
            box-shadow: 6px 6px 0px #000000;
            padding: 36px 32px;
          }
          header {
            border-bottom: 3px solid #000000;
            padding-bottom: 24px;
            margin-bottom: 24px;
          }
          .brand-pill {
            display: inline-block;
            background: #000000;
            color: #ffffff;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 4px 10px;
            margin-bottom: 12px;
          }
          h1 {
            font-size: 28px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            color: #000000;
            margin-bottom: 8px;
          }
          p.lead {
            font-size: 15px;
            color: #404040;
            max-width: 750px;
          }
          .stats-bar {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 16px;
            padding: 12px 16px;
            background: #f4f4f4;
            border: 1px solid #000000;
          }
          .stat-item {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .stat-item span {
            font-weight: 800;
            color: #000000;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 13px;
          }
          th {
            background-color: #000000;
            color: #ffffff;
            text-align: left;
            padding: 12px 14px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 700;
          }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #e5e5e5;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #f9f9f9;
          }
          td.url a {
            color: #000000;
            text-decoration: underline;
            font-weight: 600;
            word-break: break-all;
          }
          td.url a:hover {
            color: #555555;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            font-size: 11px;
            font-weight: 700;
            font-family: monospace;
            border: 1px solid #000000;
            background: #ffffff;
          }
          footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 2px solid #000000;
            font-size: 12px;
            color: #666666;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
          }
          footer a {
            color: #000000;
            font-weight: 700;
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="brand-pill">CoreForge Indexation Protocol</div>
            <h1>XML Search Index &amp; Sitemap</h1>
            <p class="lead">
              Official index of canonical URLs published by CoreForge for search engine crawlers (Googlebot, Bingbot) and Generative Engine Optimization (AEO/GEO models).
            </p>
            <div class="stats-bar">
              <div class="stat-item">Total URLs: <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span></div>
              <div class="stat-item">Protocol: <span>Sitemaps.org 0.9</span></div>
              <div class="stat-item">Location: <span>Bengaluru, Karnataka, India</span></div>
            </div>
          </header>

          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL Location</th>
                <th style="width: 15%;">Priority</th>
                <th style="width: 15%;">Change Frequency</th>
                <th style="width: 15%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="url">
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <xsl:if test="image:image">
                      <span style="display: inline-block; margin-left: 8px; font-size: 10px; font-weight: 700; background: #000; color: #fff; padding: 1px 6px;">IMG</span>
                    </xsl:if>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>
            <div>Generated by CoreForge Engineering Lab · 352, 4th Cross Rd, Peenya, Bengaluru 560058</div>
            <div>
              <a href="https://www.coreforgeindia.com/">Return to Homepage</a> · 
              <a href="https://www.coreforgeindia.com/robots.txt">robots.txt</a> · 
              <a href="https://www.coreforgeindia.com/llms.txt">llms.txt</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
