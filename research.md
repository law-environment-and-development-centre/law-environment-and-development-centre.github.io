---
layout: page
title: Latest Research
permalink: /research/
---

<section class="wrap">
  <div class="research">
    {%- for r in site.data.research %}
    <article class="research__card research__card--{{ r.colour | default: 'sea-blue' }}">
      <h2>{{ r.title }}</h2>
      <p class="research__years">{{ r.years }}</p>
      {% if r.link != "" %}<a class="btn btn--outline-current" href="{{ r.link }}">Read more</a>{% endif %}
    </article>
    {%- endfor %}
  </div>
</section>
