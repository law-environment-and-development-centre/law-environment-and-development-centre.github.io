---
layout: page
title: About Us
permalink: /about/
side_image: https://static.wixstatic.com/media/e23131_2f34b1ad9d1d4a12ae1e518606a68a7c~mv2.jpg/v1/fit/w_900,h_900,q_85,enc_auto/e23131_2f34b1ad9d1d4a12ae1e518606a68a7c~mv2.jpg
intro: >-
  The Law, Environment and Development Centre (LEDC) investigates the dynamic
  relationships between the fields of law, environment and development.
---

<section class="wrap prose" markdown="1">

The [Law, Environment and Development Centre (LEDC)](https://www.soas.ac.uk/ledc/), based in the College of Law, provides a focal point to expand the increasing interest in the dynamic relationships between the fields of law, environment and development. The main goal of the centre is to advance research and teaching and explore the role each of these disciplines plays in realising sustainable development and natural resource use, particularly in the Global South.

LEDC adopts multidisciplinary approaches in researching key issues in environmental law and development today, including water, land use, forests, climate change, intellectual property, rights of nature and indigenous peoples' rights. Its research focuses in particular on topics of relevance to the South and to North-South relations.

LEDC is a member of the [IUCN Academy of Environmental Law](https://www.iucnael.org/en/), the largest network of environmental law education providers, and co-hosts the European Research Council-funded project [Addressing the Multi-scalar Dimensions of Sectoral Water Conflicts: Lessons from South Asia (WATCON)](https://www.soas.ac.uk/research/addressing-multi-scalar-dimensions-sectoral-water-conflicts-lessons-south-asia-watcon-2025).

Prospective PhD candidates are welcome to contact [Professor Philippe Cullet](https://www.soas.ac.uk/about/philippe-cullet) or [Dr Birsha Ohdedar](https://www.soas.ac.uk/about/birsha-ohdedar) about supervision.

</section>

<section class="band band--light">
  <div class="wrap">
    <h2 class="band__title">Research themes</h2>
    <p class="lead">The Law, Environment and Development Centre undertakes research in various areas of environmental law of contemporary relevance. The centre's research focuses in particular on topics of relevance to the South and to North-South relations:</p>
    <div class="themes">
      {%- for t in site.data.themes %}
      <div class="theme"><h3>{{ t.title }}</h3><p>{{ t.text }}</p></div>
      {%- endfor %}
    </div>
    <p><a class="btn btn--dark" href="{{ '/research/' | relative_url }}">See current research projects</a></p>
  </div>
</section>

<section class="wrap" id="team">
  <h2 class="band__title">Meet the Team</h2>
  <div class="people">
    {%- for p in site.data.team %}
    <article class="person">
      <img src="{% include src.html src=p.photo %}" alt="{{ p.name }}" loading="lazy">
      <div class="person__text">
        <h3>{{ p.name }}</h3>
        {{ p.bio | markdownify }}
        {% if p.profile != "" %}<a class="btn btn--outline" href="{{ p.profile }}">Read more about {{ p.first }}'s work</a>{% endif %}
      </div>
    </article>
    {%- endfor %}
  </div>
</section>
