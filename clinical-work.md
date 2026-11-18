---
layout: page
title: Clinical Work
permalink: /clinical-work/
side_image: https://static.wixstatic.com/media/e23131_fe15e31eecdc4c58802fe0d2e46d9c0e~mv2.jpg/v1/fit/w_1000,h_1000,q_85,enc_auto/e23131_fe15e31eecdc4c58802fe0d2e46d9c0e~mv2.jpg
intro: |-
  The LEDC convenes the SOAS Environmental Justice Clinic, which provides students at SOAS with the opportunity to engage directly in public interest legal and policy work at the intersection of environmental protection and human rights.

  The Clinic enables students to build their research, writing, and policy advocacy skills by contributing to ongoing campaigns, legal interventions, and collaborative research projects both globally and within the UK.
---

<section class="wrap arms">
<div class="prose" markdown="1">

Since 2022, the SOAS Environmental Justice Clinic has partnered with NGOs, charities and legal advocates to provide impactful, critical and high-quality legal and policy research. The Clinic has two arms:

</div>
<div class="arms__grid">
  <div class="arm"><h3>Environmental Policy Clinic</h3><p>Provides high-quality research that addresses the pressing environmental challenges of the day and informs advocacy.</p></div>
  <div class="arm"><h3>Legal Advice Clinic</h3><p>Provides formal legal advice on environmental law matters, with supervision by barristers and solicitors.</p></div>
</div>
</section>

<section class="wrap split">
<div class="split__main panel panel--sky" markdown="1">

Working closely with partner organisations such as the Environmental Law Foundation (ELF), ClientEarth, The Wildlife Trusts and Lawyers for Nature, students have contributed to a wide variety of initiatives.

These have included assisting in policy campaign work to urge UK local authorities to act on their climate emergency declarations, and supporting public interest cases that aim to hold decision-makers accountable for environmental and social harms.

Students have also worked on international legal advocacy, such as contributing to submissions urging the International Criminal Court to recognise the environment as a direct victim of international crimes.

Alongside policy-focused projects, the Clinic has supported practical research and mapping exercises, for example, documenting the presence of UK-protected species along the River Ouse in Sussex.

In collaboration with Lawyers for Nature, students have also undertaken comparative research on representation models for Nature, such as guardianship frameworks used in New Zealand and Spain, as part of broader efforts to explore how legal systems can advance the recognition of the rights of Nature.

Through these diverse projects, the Clinic creates a platform for SOAS students, both postgraduate and undergraduate, to apply their academic knowledge in real-world contexts, while contributing to the wider movement for environmental justice and transformative legal change.

</div>
<aside class="split__side partners" aria-label="Partner organisations">
  {%- for p in site.data.partners %}
  {% if p.url != "" %}<a href="{{ p.url }}">{% endif %}<img src="{% include src.html src=p.logo %}" alt="{{ p.name }}" loading="lazy">{% if p.url != "" %}</a>{% endif %}
  {%- endfor %}
</aside>
</section>

<section class="band band--sea-blue">
<div class="wrap prose" markdown="1">

## Placements at SOAS

At SOAS, we have a strong commitment to social justice and to contributing to a society in which everyone experiences belonging and is treated with respect.

We have partnered with different organisations to enable our students to develop their legal skills and knowledge in different areas of law. Through our clinical legal education programme, students have an opportunity to enhance their employability and benefit from practical experiences, taking 'a law-in-action approach'.

Our clinical legal education programme is designed to foster inclusion. By promoting and facilitating our students' access to experiential learning opportunities, we are fostering equality, equity and diversity – not just on our campus, but also within the wider community. We are proud to be associated with causes promoting access to justice and the rule of law.

</div>
</section>

<section class="band band--stone">
  <div class="wrap">
    <h2 class="band__title band__title--crimson">Recent projects</h2>
    <div class="projects">
      {%- for p in site.data.clinic_projects %}
      {% include project-card.html project=p %}
      {%- endfor %}
    </div>
  </div>
</section>

<section class="wrap outputs" id="outputs">
<div class="prose" markdown="1">

## Reports and outputs

- [Environmental Justice Clinic Report 2025/26](https://drive.google.com/file/d/185EyBZyWcmFBf1v1_kxfKBYn-2oS9PIX/view): a year of five projects and the legal advice clinic
- [Representing Rights of Nature: A Survey of Representative Forms](https://www.soas.ac.uk/about/news/soas-environmental-law-clinic-partners-lawyers-nature-rights-nature-representative-model), with Lawyers for Nature
- [Rights of Nature and the River Ouse](https://www.soas.ac.uk/about/news/soas-students-champion-rights-nature-pro-bono-project-river-ouse): two reports on the River Ouse in Sussex
- [Response to the International Criminal Court's Draft Policy on Environmental Crimes](https://www.soas.ac.uk/about/news/soas-environmental-law-clinic-calls-icc-recognise-environment-legal-victim)
- [Local level climate action](https://www.soas.ac.uk/about/news/students-study-impact-councils-climate-emergency-declarations): research on councils' climate emergency declarations, with the Environmental Law Foundation

</div>
</section>
