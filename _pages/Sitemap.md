---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. 

<h2>Projects</h2>
{% for post in site.projects %}
  {% include archive-single.html %}
{% endfor %}

<h2>Publications</h2>
{% for post in site.publications %}
  {% include archive-single.html %}
{% endfor %}

<h2>Patents</h2>
{% for post in site.patents %}
  {% include archive-single.html %}
{% endfor %}

<h2>Awards</h2>
{% for post in site.awards %}
  {% include archive-single.html %}
{% endfor %}
