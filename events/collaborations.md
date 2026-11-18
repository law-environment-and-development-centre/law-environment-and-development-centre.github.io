---
layout: page
title: Events & Collaborations
permalink: /events/collaborations/
eyebrow: '<a href="/events/">Events</a>'
description: Workshops, consultations and joint events involving the SOAS Law, Environment and Development Centre.
---

<section class="wrap section">
  {% for it in site.data.collaborations %}
  <article class="collab">
    <h2>{% if it.link %}<a href="{% include src.html src=it.link %}">{{ it.title }}</a>{% else %}{{ it.title }}{% endif %}</h2>
    {% if it.points %}<ul>{% for pt in it.points %}<li>{{ pt }}</li>{% endfor %}</ul>{% endif %}
  </article>
  {% endfor %}
</section>
