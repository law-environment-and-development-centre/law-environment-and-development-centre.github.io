---
layout: page
title: Latest Research
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
    <article class="research__card research__card--{{ r.colour | default: 'sea-blue' }}">
      <h2>{{ r.title }}</h2>
      {% if r.years != "" %}<p class="research__years">{{ r.years }}</p>{% endif %}
      <p class="research__links">
        {% if r.link != "" %}<a class="btn btn--outline-current" href="{{ r.link }}">Read more</a>{% endif %}
        {% if r.website %}<a class="btn btn--outline-current" href="{{ r.website }}">Project website</a>{% endif %}
      </p>
    </article>
    {%- endfor %}
  </div>
</section>
