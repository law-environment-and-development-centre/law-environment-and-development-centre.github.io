---
layout: page
title: Research
permalink: /research/
---

<section class="wrap">
  <div class="link-cards">
    <a class="link-card" href="{{ '/research/phd/' | relative_url }}"><strong>PhD research</strong><span>Current and completed doctoral projects at the Centre</span></a>
    <a class="link-card" href="{{ '/research/advice-impact/' | relative_url }}"><strong>Advice, transnational education and impact</strong><span>Policy advice, summer schools and expert networks</span></a>
  </div>
  <h2 class="band__title">Research projects</h2>
  <div class="research">
    {%- for r in site.data.research %}
    {% include research-card.html r=r %}
    {%- endfor %}
  </div>
</section>
