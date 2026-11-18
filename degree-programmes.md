---
layout: page
title: Degree Programmes
permalink: /degree-programmes/
banner: https://static.wixstatic.com/media/fe513e_c1473dc7f14347e785201fa9151a61ed~mv2.jpg/v1/fit/w_2000,h_2000,q_85,enc_auto/fe513e_c1473dc7f14347e785201fa9151a61ed~mv2.jpg
---

<section class="band band--sea-blue">
<div class="wrap programmes" markdown="1">

## Postgraduate degrees

### LLM/MA Environmental Law and Sustainable Development

A 1-year (full-time) or 2 or 3-year (part-time) degree offered at the London campus, providing a unique specialisation in a rapidly evolving area of law, covering a range of issues at the heart of major contemporary developments and debates.

[LLM details](https://www.soas.ac.uk/study/find-course/llm-environmental-law-and-sustainable-development){: .btn .btn--outline-light}
[MA details](https://www.soas.ac.uk/study/find-course/ma-environmental-law-and-sustainable-development){: .btn .btn--outline-light}

### SOAS-NLUD joint LLM/MA in Environmental Justice

[Programme details](https://www.soas.ac.uk/study/find-course/nlud-soas-joint-llm/ma-environmental-justice-south-asia){: .btn .btn--outline-light}

### MRes in Law

[Programme details](https://www.soas.ac.uk/study/find-course/mres-law){: .btn .btn--outline-light}

## Undergraduate modules

### LLB courses for year 2 and 3 undergraduates

- Environmental Law in Action: Comparative and Domestic Perspectives – 15 credits
- International Environmental Law – 15 credits
- Oceans and Outer Space Law – 15 credits

[More information](https://www.soas.ac.uk/study/find-course/llb){: .btn .btn--outline-light}

</div>
</section>

<section class="wrap" id="modules">
  <h2 class="band__title">LLM/MA modules</h2>
  <div class="prose">
    <p>The SOAS LLM/MA in Environmental Law and Sustainable Development offers a wide range of distinctive modules that combine a focus on core subjects in the field with a critical inquiry into the theory and practice of environmental law, particularly as they relate to the global South. Each module page below gives more background than the SOAS course pages.</p>
  </div>
  {% assign mods = site.modules | sort: "order" %}
  <div class="module-cols">
    {% for sem in (1..2) %}
    <div>
      <h3>Semester {{ sem }}</h3>
      <ul class="module-list">
        {% for m in mods %}{% if m.semester == sem %}
        <li><a href="{{ m.url | relative_url }}">{{ m.title }}</a> <span class="muted">{{ m.credits }} credits</span></li>
        {% endif %}{% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<section class="band band--stone">
<div class="wrap prose" markdown="1">

## Research degrees

Applications for PhDs relating to the work of the Centre are warmly invited and should be directed to [Professor Philippe Cullet](https://www.soas.ac.uk/about/philippe-cullet) or [Dr Birsha Ohdedar](https://www.soas.ac.uk/about/birsha-ohdedar). For more on research degrees in Law at SOAS and how to apply, see [Law research degrees](https://www.soas.ac.uk/study/find-course/mphil/phd-law).

[Current and past PhD research]({{ '/research/phd/' | relative_url }}){: .btn .btn--dark}

</div>
</section>
