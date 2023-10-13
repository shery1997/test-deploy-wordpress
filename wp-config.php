<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'testdeploydb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('WP_HTTP_BLOCK_EXTERNAL', false);

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm!xL*|%Xx7J,!kms/,?:U{5-bwU.MThO6t,aL{H><q*nA<..B]Tv CL qxGzFg$F' );
define( 'SECURE_AUTH_KEY',  'Ll~lr;7 l5aA/oC:npt IjZJ(*f09c33cpGt<zt)<Ah1M[HO0y&1dB*6|5WoG!:D' );
define( 'LOGGED_IN_KEY',    '<Tk%EcAPRQ3Cn,U poS5)fH*D%JIId/Ms.2AybFD4FBB}iw+%!FvFe6jpkJu;;Oj' );
define( 'NONCE_KEY',        '2,95PtIFuUO^CQKG:YNzRE;C=TjF-Oy#7I$=Sojj>[<?}8V!A Q[zy.KDK9%GR]V' );
define( 'AUTH_SALT',        '9&jU!v1vos3Mcb%euZXx|FHpu,IDf~z8S*N-plP7Bf2e~/0lL2_>}^Dc9(}JlTgo' );
define( 'SECURE_AUTH_SALT', '6yGGIIq`FpRdns6QoXK g YW59[FwXIV>7%|0XdSL#5d*3H+f}<DxP-}o+p6&+)v' );
define( 'LOGGED_IN_SALT',   'api}w{^n.rKe//-6H$RL@b>jDGuB,sP#uXdmukQgbSK<.]vK,xn0(`%NYn-UIU,>' );
define( 'NONCE_SALT',       'xkuLA*mU/=@PAI:q2rY(g|`(cG9@$,N56dZ.]EY3{H{Q5?;(!9b!fPH>l0CG>6Ac' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'deploy_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
