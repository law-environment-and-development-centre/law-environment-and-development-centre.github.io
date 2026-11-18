---
layout: page
title: LEDC Members
permalink: /members/
---

{% for g in site.data.members %}
<section class="wrap members-group{% if g.group == 'Alumni voices' %} members-group--voices{% endif %}">
  <h2 class="band__title">{{ g.group }}</h2>
  {% if g.group == 'Alumni voices' %}
  <div class="voices">
    {% for p in g.people %}
    <article class="voice">
      {% if p.photo %}<img src="{% include src.html src=p.photo %}" alt="{{ p.name }}" loading="lazy">{% endif %}
      <div>
        <h3>{{ p.name }}</h3>
        {% if p.role %}<p class="voice__role">{{ p.role }}</p>{% endif %}
        <details><summary>Read more</summary>{{ p.text | markdownify }}</details>
      </div>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <div class="member-grid">
    {% for p in g.people %}
    <article class="member">
      {% if p.photo %}<img src="{% include src.html src=p.photo %}" alt="{{ p.name }}" loading="lazy">{% else %}<span class="member__nophoto" aria-hidden="true"></span>{% endif %}
      <h3>{% if p.link %}<a href="{% include src.html src=p.link %}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
      {% if p.role %}<p class="member__role">{{ p.role }}</p>{% endif %}
      {% if p.interests %}<p class="member__interests">{{ p.interests }}</p>{% endif %}
      {% if p.email %}<p class="member__email"><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>{% endif %}
    </article>
    {% endfor %}
  </div>
  {% endif %}
</section>
{% endfor %}
