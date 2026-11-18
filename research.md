---
layout: page
title: Research
permalink: /research/
description: Research projects at the SOAS Law, Environment and Development Centre on water, land, climate change, rights of nature and environmental justice.
intro: >-
  LEDC adopts multidisciplinary approaches in researching key issues in environmental
  law and development today. Its research focuses in particular on topics of relevance
  to the South and to North-South relations.
---

<nav class="wrap" aria-label="More on research">
  <ul class="subnav">
    <li class="subnav__label">Also in Research:</li>
    <li><a class="more" href="{{ '/research/phd/' | relative_url }}">PhD research</a></li>
    <li><a class="more" href="{{ '/research/advice-impact/' | relative_url }}">Advice, transnational education and impact</a></li>
  </ul>
</nav>

<section class="wrap section" aria-labelledby="projects-title">
  <h2 class="section__title" id="projects-title">Research projects</h2>
  <ul class="cards">
    {%- for r in site.data.research %}
    {% include research-card.html r=r %}
    {%- endfor %}
  </ul>
</section>
