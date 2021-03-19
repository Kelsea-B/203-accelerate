<?php

/**
 * The SMTP class has been moved to the wp-includes/PHPMailer subdirectory and now uses the PHPMailer\PHPMailer namespace.
 */
_deprecated_file(
	basename( __FILE__ ),
	'5.5.0',
	WPINC . '/PHPMailer/SMTP.php',
	__( 'The SMTP class has been moved to the wp-includes/PHPMailer subdirectory and now uses the PHPMailer\PHPMailer namespace.' )
);

<<<<<<< HEAD
require_once __DIR__ . '/PHPMailer/SMTP.php';
=======
require __DIR__ . '/PHPMailer/SMTP.php';
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

class_alias( PHPMailer\PHPMailer\SMTP::class, 'SMTP' );
