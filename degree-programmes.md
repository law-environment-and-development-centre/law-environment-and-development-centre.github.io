---
layout: page
title: Teaching & Study
permalink: /degree-programmes/
description: Environmental law teaching and research degrees at SOAS University of London connected with the Law, Environment and Development Centre.
intro: >-
  Members of the Law, Environment and Development Centre teach environmental law
  across the SOAS College of Law, from undergraduate modules to the LLM in
  Environmental Law and Sustainable Development, and supervise doctoral research.
  The degrees below are awarded by SOAS University of London.
---

<section class="wrap section" aria-labelledby="pg-title">
  <h2 class="section__title" id="pg-title">Postgraduate programmes</h2>
  <ul class="defs defs--2">
    <li>
      <h3>LLM Environmental Law and Sustainable Development</h3>
      <p>A one-year (full-time) or two-year (part-time) degree at the London campus, providing a unique specialisation in a rapidly evolving area of law, covering a range of issues at the heart of major contemporary developments and debates.</p>
      <p class="muted">Co-convened by Professor Philippe Cullet and Dr Birsha Ohdedar.</p>
      <p><a class="more" href="https://www.soas.ac.uk/study/find-course/llm-environmental-law-and-sustainable-development">LLM details on the SOAS website</a></p>
    </li>
    <li>
      <h3>MRes in Law</h3>
      <p>A one-year research degree, full-time or part-time, giving advanced skills in legal research and research methods. It is especially suited to students planning a PhD or professional research in law.</p>
      <p class="muted">Co-convened by Professor Philippe Cullet.</p>
      <p><a class="more" href="https://www.soas.ac.uk/study/find-course/mres-law">MRes details on the SOAS website</a></p>
    </li>
  </ul>
</section>

<section class="band band--light" id="modules" aria-labelledby="modules-title">
  <div class="wrap">
    <h2 class="section__title" id="modules-title">Modules</h2>

    <h3 class="subhead">LLM modules</h3>
    <p class="section__intro">The SOAS LLM in Environmental Law and Sustainable Development offers a wide range of distinctive modules that combine a focus on core subjects in the field with a critical inquiry into the theory and practice of environmental law, particularly as they relate to the global South. Each module page gives more background than the SOAS course pages.</p>
    {% assign mods = site.modules | sort: "order" %}
    <div class="module-cols">
      {% for sem in (1..2) %}
      <div>
        <h4>Term {{ sem }}</h4>
        <ul class="rule-list module-list">
          {% for m in mods %}{% if m.semester == sem %}
          <li><a href="{{ m.url | relative_url }}">{{ m.title }}</a> <span class="muted">{{ m.credits }} credits</span></li>
          {% endif %}{% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>

    <div class="module-cols">
      <div>
        <h3 class="subhead">Undergraduate modules</h3>
        <p>LLB modules for second- and third-year students:</p>
        <ul class="rule-list">
          <li>Environmental Law in Action: Comparative and Domestic Perspectives <span class="muted">15 credits</span></li>
          <li>International Environmental Law <span class="muted">15 credits</span></li>
          <li>Oceans and Outer Space Law <span class="muted">15 credits</span></li>
        </ul>
        <p><a class="more" href="https://www.soas.ac.uk/study/find-course/llb">LLB details on the SOAS website</a></p>
      </div>
      <div>
        <h3 class="subhead">Other modules</h3>
        <p>Modules in development or not running this year:</p>
        <ul class="rule-list">
          <li>Environmental Justice Clinic <span class="muted">New full-year, credit-bearing LLM module from 2027/28</span></li>
          <li>Law and the Biodiversity Crisis <span class="muted">On hold</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="wrap section" aria-labelledby="rd-title">
  <h2 class="section__title" id="rd-title">Research degrees</h2>
  <div class="prose">
    <p>Applications for PhDs relating to the work of the Centre are warmly invited and should be directed to <a href="https://www.soas.ac.uk/about/philippe-cullet">Professor Philippe Cullet</a> or <a href="https://www.soas.ac.uk/about/birsha-ohdedar">Dr Birsha Ohdedar</a>. For more on research degrees in Law at SOAS and how to apply, see <a href="https://www.soas.ac.uk/study/find-course/mphil/phd-law">Law research degrees</a>.</p>
  </div>
  <p class="actions"><a class="more" href="{{ '/research/phd/' | relative_url }}">Current and completed PhD research at LEDC</a></p>
</section>
