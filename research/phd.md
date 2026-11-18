---
layout: page
title: PhD Research
permalink: /research/phd/
eyebrow: '<a href="/research/">Research</a>'
description: Ongoing and completed PhD research at the SOAS Law, Environment and Development Centre.
intro: >-
  LEDC encourages scholarship of different kinds, as reflected in this list of some
  of the PhD projects undertaken in the context of the Centre.
---

<section class="wrap section" markdown="1">
<div class="prose" markdown="1">

PhD publication: Aïda Tamer Chammas, *State Accountability for Environmental Damage in International Armed Conflict* ([Routledge](https://www.routledge.com/State-Accountability-for-Environmental-Damage-in-International-Armed-Conflict/TamerChammas/p/book/9780367414825), 2025)

Applications for PhDs relating to the work of the Centre are warmly invited and should be directed to [Professor Philippe Cullet](https://www.soas.ac.uk/about/philippe-cullet) or [Dr Birsha Ohdedar](https://www.soas.ac.uk/about/birsha-ohdedar).

</div>
</section>

<section class="wrap section section--rule">
  <h2 class="section__title">Ongoing projects</h2>
  {% for p in site.data.phd %}{% unless p.completed %}{% include phd-entry.html p=p %}{% endunless %}{% endfor %}
</section>

<section class="wrap section section--rule">
  <h2 class="section__title">Completed theses</h2>
  {% for p in site.data.phd %}{% if p.completed %}{% include phd-entry.html p=p %}{% endif %}{% endfor %}
</section>
