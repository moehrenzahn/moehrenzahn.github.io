
preview:
	(sleep 2 && open http://127.0.0.1:4000/) &
	bundle exec jekyll serve --incremental
thumbnails:
	./_scripts/generate-thumbnails.py
update:
	./_scripts/generate-thumbnails.py
	git add .
	git commit -m "Update site"
	git push origin master
new:
	./_scripts/new-post.php "$$(pbpaste)"
new-painting:
	./_scripts/new-painting.php "$$(pbpaste)"
post-social:
	cd /Users/max/dev/social-cli && ruby ./main.rb