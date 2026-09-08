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
    <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=CoGUfslMnZAZZwd8udq8avYz7egE8ydJDB9YGtcrWRA&cl=ffffff&w=a"></script>
  </div>
</div>

{% for post in site.publications %}
  {% include archive-single.html %}
{% endfor %}
