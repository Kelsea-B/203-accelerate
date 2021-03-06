<?php
/*
*Template Name: About
*Template Post Type: post, page
*
* @package WordPress
* @subpackage Accelerate Marketing
* @since Accelerate Marketing 2.0
*/

get_header(); ?>

<div id="primary" class="home-page hero-content about">
	<div class="main-content" role="main">
		<h3> Accelerate is a strategy and marketing agency located in the heart of NYC.
			Our goal is to build businesses by making our clients visible and making their customers smile.</h3>
		<?php while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; // end of the loop. ?>
	</div><!-- .main-content -->
</div><!-- #primary -->

<!-- SERVICES -->
	<section class="services">
		<div class="site-content">

			<div class="about-subheading">
				<h4> Our Services </h4>
					<p> We take pride in our clients and the content we create for them.
						<br>Here’s a brief overview of our offered services.</p>
				<?php while ( have_posts() ) : the_post();
					$subheading = get_field("subheading");
					$description = get_field("description");
				?>
					<h4><?php echo $subheading ?></h4>
					<p><?php echo $description ?></p>
				<?php endwhile; // end of the loop ?>
			</div>

			<ul class="about-services">
				<?php query_posts('posts_per_page=4&post_type=services'); ?>
				<?php while ( have_posts() ) : the_post();
					$service_icon = get_field("service_icon");
					$size = "medium";
				?>

				<li class="individual-services">
					<figure class="individual-services-icon">
						<?php echo wp_get_attachment_image($service_icon, $size); ?>
					</figure>
					<div class="individual-services-text">
						<h3><?php the_title(); ?></h3>
						<?php the_content(); ?>
					</div>
				</li>

				<?php endwhile; // end of the loop ?>
				<?php wp_reset_query(); // resets the altered query back to the original ?>
			</ul>
		</div>
	</section>

	<section class="about-cta">
		<div class="site-content">
			<div class="contact-us-button">
		    <h2>Interested in working with us?</h2>
			  <a class="button" href="<?php echo site_url('/contact-us/') ?>">Contact Us</a>
			</div>
		</div>
	</div>

<?php get_footer(); ?>
