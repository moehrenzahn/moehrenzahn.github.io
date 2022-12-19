---
title: 'wp-toolkit – An object-oriented WordPress API wrapper'
categories: [Technologie]
lang: en
---

I am the developer taking care of the WordPress-based online magazine [*Die Eule*](https://eulemagazin.de/).

WordPress is not known for it's clean and modern programming API. The WordPress coding style is relatively antiquated and there are many parts of WordPress that do not work in an object-oriented way. This makes it difficult to develop themes or plugins in a consistent, modern fashion.

That is why I started to wrap the WordPress APIs I needed in a framework. The criteria for this wrapper were:

- modern PHP syntax (7.1 and up)
- object oriented, composition based code patterns
- PSR2-compliant code style
- Model-View-Controller pattern (MVC) for template rendering
- Composer support 

Today, I am publishing the resulting framework.

You can [find `wp-toolkit` on GitHub](https://github.com/moehrenzahn/wp-toolkit). It is also listed on Packagist, so you can install it with a simple

{% highlight bash %}
composer require moehrenzahn/wp-toolkit
{% endhighlight %}

Check out the [read me file on GitHub](https://github.com/moehrenzahn/wp-toolkit) for more information and some usage examples.

The list of wrapped APIs is still far from exhaustive. However, we are actively using `wp-toolkit` at *Die Eule* and I will continue to fix bugs and add functionality as soon as we need it. 

If you are a WordPress developer, I would appreciate it if you gave the toolkit a spin. Feel free to [create issues](https://github.com/moehrenzahn/wp-toolkit/issues/new) on GitHub for bugs you encounter or feature suggestions.
