---
layout: page
title: PhD Research
permalink: /research/phd/
---

<section class="wrap prose" markdown="1">

LEDC encourages scholarship of different kinds, as reflected in this list of some of the PhD projects undertaken in the context of the Centre:

PhD publication: Aïda Tamer Chammas, State Accountability for Environmental Damage in International Armed Conflict ([Routledge](https://www.routledge.com/State-Accountability-for-Environmental-Damage-in-International-Armed-Conflict/TamerChammas/p/book/9780367414825?srsltid=AfmBOop47eoGM19qSJITMlOEZ3yx-09bQRaUzN7AnClySb_vc4j66pSh), 2025)

Applications for PhDs relating to the work of the Centre are warmly invited and should be directed to [Professor Philippe Cullet](https://www.soas.ac.uk/about/philippe-cullet) or [Dr Birsha Ohdedar](https://www.soas.ac.uk/about/birsha-ohdedar).

</section>

<section class="wrap phd">
  <h2 class="band__title">Ongoing projects</h2>
  {% for p in site.data.phd %}{% unless p.completed %}{% include phd-entry.html p=p %}{% endunless %}{% endfor %}
  <h2 class="band__title">Completed theses</h2>
  {% for p in site.data.phd %}{% if p.completed %}{% include phd-entry.html p=p %}{% endif %}{% endfor %}
</section>
