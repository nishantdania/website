# frozen_string_literal: true

# This plugin generates .md versions of posts at their permalink URLs.
# For example, if a post is at /posts/2019/03/02/my-post/ (HTML),
# the original markdown will also be available at /posts/2019/03/02/my-post.md
#
# This hook runs after Jekyll has finished writing the site, ensuring
# the markdown files persist and aren't cleaned up during the build process.

module Jekyll
  Hooks.register :site, :post_write do |site|
    site.posts.docs.each do |post|
      next unless post.path && post.url

      # Determine the output path for the .md file
      # Remove trailing slash from URL and add .md extension
      md_url = post.url.chomp('/') + '.md'
      md_path = File.join(site.dest, md_url)

      # Create the directory structure if needed
      dir = File.dirname(md_path)
      FileUtils.mkdir_p(dir) unless File.exist?(dir)

      # Read and write the original markdown content (including frontmatter)
      source_content = File.read(post.path)
      File.write(md_path, source_content)
    end
  end
end
