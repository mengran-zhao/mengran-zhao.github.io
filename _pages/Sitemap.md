---
layout: archive
title: "Publication Overview"
permalink: /sitemap/
author_profile: true
---

------

<!-- Record Visit -->
{% if author.clustrmaps %}
  <script type="text/javascript" id="clustrmaps" src="https://clustrmaps.com/map_v2.js?d=sBXO5xvCxmJtaZs2obVmWao2pY2MGpJX3gC8oFRHfp8&cl=ffffff&w=a"></script>
  <style>
    #clustrmaps-widget {
      transform: scale(0.8);
      transform-origin: top left;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  </style>
{% endif %}

{% for post in site.publications %}
  {% include archive-single.html %}
{% endfor %}
