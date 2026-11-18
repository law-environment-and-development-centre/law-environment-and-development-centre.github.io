---
layout: page
title: Degree Programmes
permalink: /degree-programmes/
banner: https://static.wixstatic.com/media/fe513e_c1473dc7f14347e785201fa9151a61ed~mv2.jpg/v1/fit/w_2000,h_2000,q_85,enc_auto/fe513e_c1473dc7f14347e785201fa9151a61ed~mv2.jpg
---

<section class="band band--sea-blue">
<div class="wrap programmes" markdown="1">

## Postgraduate degrees

### LLM Environmental Law and Sustainable Development

A one-year (full-time) or two- or three-year (part-time) degree offered at the London campus, providing a unique specialisation in a rapidly evolving area of law, covering a range of issues at the heart of major contemporary developments and debates.

[Programme details](https://www.soas.ac.uk/study/find-course/llm-environmental-law-and-sustainable-development){: .btn .btn--outline-light}

### MRes in Law

[Programme details](https://www.soas.ac.uk/study/find-course/mres-law){: .btn .btn--outline-light}

## Undergraduate modules

### LLB modules for second- and third-year undergraduates

- Environmental Law in Action: Comparative and Domestic Perspectives – 15 credits
- International Environmental Law – 15 credits
- Oceans and Outer Space Law – 15 credits

[More information](https://www.soas.ac.uk/study/find-course/llb){: .btn .btn--outline-light}

</div>
</section>

<section class="wrap" id="modules">
  <h2 class="band__title">LLM modules</h2>
  <div class="prose">
    <p>The SOAS LLM in Environmental Law and Sustainable Development offers a wide range of distinctive modules that combine a focus on core subjects in the field with a critical inquiry into the theory and practice of environmental law, particularly as they relate to the global South. Each module page below gives more background than the SOAS course pages.</p>
  </div>
  {% assign mods = site.modules | sort: "order" %}
  <div class="module-cols">
    {% for sem in (1..2) %}
    <div>
      <h3>Term {{ sem }}</h3>
      <ul class="module-list">
        {% for m in mods %}{% if m.semester == sem %}
        <li><a href="{{ m.url | relative_url }}">{{ m.title }}</a> <span class="muted">{{ m.credits }} credits</span></li>
        {% endif %}{% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
  <div class="module-other">
    <h3>Other modules</h3>
    <ul class="module-list">
      <li>Environmental Justice Clinic <span class="muted">New module, coming in 2027</span></li>
      <li>Law and the Biodiversity Crisis <span class="muted">On hold</span></li>
    </ul>
  </div>
</section>

<section class="band band--stone">
<div class="wrap prose" markdown="1">

## Research degrees

Applications for PhDs relating to the work of the Centre are warmly invited and should be directed to [Professor Philippe Cullet](https://www.soas.ac.uk/about/philippe-cullet) or [Dr Birsha Ohdedar](https://www.soas.ac.uk/about/birsha-ohdedar). For more on research degrees in Law at SOAS and how to apply, see [Law research degrees](https://www.soas.ac.uk/study/find-course/mphil/phd-law).

[Current and past PhD research]({{ '/research/phd/' | relative_url }}){: .btn .btn--dark}

</div>
</section>
