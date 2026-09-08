---
layout: archive
title: "Publication Overview "
permalink: /sitemap/
author_profile: true
---

------
<style>
  #clustrmaps-widget {
    margin: 0 !important;
    text-align: left !important;
    display: block !important;
    float: left !important;
  }
</style>

<div style="margin-top: 10px; text-align: left;">
  <div id="map-wrapper">
    <script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=PL_v9Z_8bVcCgMzQHyGBJBY4tNxMhZgEIuMOli41kkY"></script>
  </div>
</div>

{% for post in site.publications %}
  {% include archive-single.html %}
{% endfor %}
