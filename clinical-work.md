---
layout: page
title: Clinical Work
eyebrow: SOAS Environmental Justice Clinic
description: The SOAS Environmental Justice Clinic, convened by LEDC, gives students experience of public interest legal and policy work on environmental protection and human rights.
permalink: /clinical-work/
side_image: https://static.wixstatic.com/media/e23131_fe15e31eecdc4c58802fe0d2e46d9c0e~mv2.jpg/v1/fit/w_1000,h_1000,q_85,enc_auto/e23131_fe15e31eecdc4c58802fe0d2e46d9c0e~mv2.jpg
intro: |-
  The LEDC convenes the SOAS Environmental Justice Clinic, which provides students at SOAS with the opportunity to engage directly in public interest legal and policy work at the intersection of environmental protection and human rights.

  The Clinic enables students to build their research, writing, and policy advocacy skills by contributing to ongoing campaigns, legal interventions, and collaborative research projects both globally and within the UK.
---

<section class="wrap section" aria-labelledby="arms-title">
  <div class="prose">
    <p>Since 2022, the SOAS Environmental Justice Clinic has partnered with NGOs, charities and legal advocates to provide impactful, critical and high-quality legal and policy research. The Clinic has two arms:</p>
  </div>
  <h2 class="visually-hidden" id="arms-title">The Clinic's two arms</h2>
  <ul class="defs defs--2">
    <li><h3>Environmental Policy Clinic</h3><p>Provides high-quality research that addresses the pressing environmental challenges of the day and informs advocacy.</p></li>
    <li><h3>Legal Advice Clinic</h3><p>Provides formal legal advice on environmental law matters, with supervision by barristers and solicitors.</p></li>
  </ul>
</section>

<section class="wrap section section--rule" aria-labelledby="work-title">
  <div class="split">
<div class="prose" markdown="1">

## Student work and partnerships {#work-title}

Working closely with partner organisations such as the Environmental Law Foundation (ELF), ClientEarth, The Wildlife Trusts and Lawyers for Nature, students have contributed to a wide variety of initiatives.

These have included assisting in policy campaign work to urge UK local authorities to act on their climate emergency declarations, and supporting public interest cases that aim to hold decision-makers accountable for environmental and social harms.

Students have also worked on international legal advocacy, such as contributing to submissions urging the International Criminal Court to recognise the environment as a direct victim of international crimes.

Alongside policy-focused projects, the Clinic has supported practical research and mapping exercises, for example, documenting the presence of UK-protected species along the River Ouse in Sussex.

In collaboration with Lawyers for Nature, students have also undertaken comparative research on representation models for Nature, such as guardianship frameworks used in New Zealand and Spain, as part of broader efforts to explore how legal systems can advance the recognition of the rights of Nature.

Through these diverse projects, the Clinic creates a platform for SOAS students, both postgraduate and undergraduate, to apply their academic knowledge in real-world contexts, while contributing to the wider movement for environmental justice and transformative legal change.

</div>
    <aside aria-labelledby="partners-title">
      <h2 class="subhead" id="partners-title">Partners</h2>
      <ul class="partners">
        {%- for p in site.data.partners %}
        <li>{% if p.url != "" %}<a href="{{ p.url }}">{% endif %}<img src="{% include src.html src=p.logo %}" alt="{{ p.name }}" loading="lazy">{% if p.url != "" %}</a>{% endif %}</li>
        {%- endfor %}
      </ul>
    </aside>
  </div>
</section>

<section class="band band--stone" aria-labelledby="projects-title">
  <div class="wrap">
    <h2 class="band__title" id="projects-title">Recent projects</h2>
    <div class="projects">
      {%- for p in site.data.clinic_projects %}
      {% include project-card.html project=p %}
      {%- endfor %}
    </div>
  </div>
</section>

<section class="wrap section" id="outputs" aria-labelledby="reports-title">
  <h2 class="section__title" id="reports-title">Reports and publications</h2>
  <ul class="reports">
    {%- for r in site.data.clinic_reports %}{% if r.group == "reports" %}
    {% include report.html r=r %}
    {%- endif %}{% endfor %}
  </ul>
  <h3 class="subhead">Other project outputs</h3>
  <ul class="reports">
    {%- for r in site.data.clinic_reports %}{% if r.group == "outputs" %}
    {% include report.html r=r %}
    {%- endif %}{% endfor %}
  </ul>
</section>

<section class="wrap section section--rule" aria-labelledby="placements-title">
<div class="prose" markdown="1">

## Placements at SOAS {#placements-title}

At SOAS, we have a strong commitment to social justice and to contributing to a society in which everyone experiences belonging and is treated with respect.

We have partnered with different organisations to enable our students to develop their legal skills and knowledge in different areas of law. Through our clinical legal education programme, students have an opportunity to enhance their employability and benefit from practical experiences, taking 'a law-in-action approach'.

Our clinical legal education programme is designed to foster inclusion. By promoting and facilitating our students' access to experiential learning opportunities, we are fostering equality, equity and diversity – not just on our campus, but also within the wider community. We are proud to be associated with causes promoting access to justice and the rule of law.

</div>
</section>
