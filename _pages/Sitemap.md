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
    <script type="text/javascript" id="clustrmaps" src="https://clustrmaps.com/map_v2.js?d=sBXO5xvCxmJtaZs2obVmWao2pY2MGpJX3gC8oFRHfp8&cl=ffffff&w=a"></script>
  </div>
</div>

{% for post in site.publications %}
  {% include archive-single.html %}
{% endfor %}
