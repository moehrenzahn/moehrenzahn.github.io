
preview:
	(sleep 6 && open http://127.0.0.1:4000/) &
	bundle exec jekyll serve
update:
	git add .
	git commit -m "Update site"
	git push origin master
new:
	./_scripts/new-post.php $$(pbpaste)