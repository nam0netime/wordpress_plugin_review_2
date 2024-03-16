<?php
$product_field  = WFACP_Common::get_product_field();
$advanced_field = WFACP_Common::get_advanced_fields();


$customizer_data = [
	'wfacp_form' => [
		'wfacp_form_section_embed_forms_2_step_form_max_width'                        => '450',
		'wfacp_form_section_embed_forms_2_active_step_bg_color'                       => '#4c4c4c',
		'wfacp_form_section_embed_forms_2_active_step_text_color'                     => '#ffffff',
		'wfacp_form_section_embed_forms_2_active_step_count_bg_color'                 => '#ffffff',
		'wfacp_form_section_embed_forms_2_active_step_count_border_color'             => '#ffffff',
		'wfacp_form_section_embed_forms_2_active_step_tab_border_color'               => '#f58e2d',
		'wfacp_form_section_embed_forms_2_inactive_step_bg_color'                     => '#f2f2f2',
		'wfacp_form_section_embed_forms_2_inactive_step_text_color'                   => '#979090',
		'wfacp_form_section_embed_forms_2_inactive_step_count_bg_color'               => 'rgba(255,255,255,0)',
		'wfacp_form_section_embed_forms_2_inactive_step_count_text_color'             => '#979090',
		'wfacp_form_section_embed_forms_2_inactive_step_count_border_color'           => '#979090',
		'wfacp_form_section_embed_forms_2_inactive_step_tab_border_color'             => '#ededed',
		'wfacp_form_section_embed_forms_2_active_step_count_text_color'               => '#4c4c4c',
		'wfacp_form_section_embed_forms_2_step_heading_font_size'                     => 19,
		'wfacp_form_form_fields_1_embed_forms_2_billing_first_name'                   => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_billing_last_name'                    => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_billing_city'                         => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_billing_postcode'                     => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_billing_country'                      => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_billing_state'                        => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_shipping_city'                        => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_shipping_postcode'                    => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_shipping_country'                     => 'wfacp-col-left-half',
		'wfacp_form_form_fields_1_embed_forms_2_shipping_state'                       => 'wfacp-col-left-half',
		'wfacp_form_section_embed_forms_2_field_border_width'                         => '1',
		'wfacp_form_section_embed_forms_2_btn_order-place_bg_color'                   => '#f58e2d',
		'wfacp_form_section_embed_forms_2_btn_order-place_text_color'                 => '#ffffff',
		'wfacp_form_section_embed_forms_2_color_type'                                 => 'hover',
		'wfacp_form_section_embed_forms_2_btn_order-place_bg_hover_color'             => '#d46a06',
		'wfacp_form_section_text_below_placeorder_btn'                                => __( '* 100% Secure & Safe Payments *', 'woofunnels-aero-checkout' ),
		'wfacp_order_summary_section_embed_forms_2_order_summary_hide_img'            => true,
		'wfacp_form_section_embed_forms_2_disable_steps_bar'                          => false,
		'wfacp_form_section_embed_forms_2_step_sub_heading_font_size'                 => 15,
		'wfacp_form_section_payment_methods_heading'                                  => __( 'Payment method', 'woofunnels-aero-checkout' ),
		'wfacp_form_section_embed_forms_2_heading_fs'                                 => 18,
		'wfacp_form_section_embed_forms_2_heading_font_weight'                        => 'wfacp-bold',
		'wfacp_form_section_embed_forms_2_sub_heading_font_weight'                    => 'wfacp-normal',
		'wfacp_form_section_embed_forms_2_sec_heading_color'                          => '#424141',
		'wfacp_form_section_embed_forms_2_field_border_color'                         => '#c3c0c0',
		'wfacp_form_section_embed_forms_2_btn_order-place_btn_text'                   => __( 'PLACE ORDER NOW', 'woofunnels-aero-checkout' ),
		'wfacp_form_section_embed_forms_2_btn_order-place_btn_font_weight'            => 'bold',
		'wfacp_form_product_switcher_section_embed_forms_2_product_switcher_bg_color' => '#ffffff',
		'wfacp_form_section_embed_forms_2_btn_order-place_border_radius'              => '10',
		'wfacp_form_section_embed_forms_2_form_border_width' => '1',
		'wfacp_form_section_embed_forms_2_form_border_type'   => 'solid',
		'wfacp_form_section_embed_forms_2_form_border_color'  => '#bbbbbb',
		'wfacp_form_section_embed_forms_2_form_inner_padding' => '15',
		'wfacp_form_section_embed_forms_2_name_0'             => __( 'GET YOUR FREE COPY OF AMAZING BOOK', 'woofunnels-aero-checkout' ),
		'wfacp_form_section_embed_forms_2_headline_0'         => __( 'Shipped in less than 3 days!', 'woofunnels-aero-checkout' ),
		'wfacp_form_section_embed_forms_2_heading_talign' => 'wfacp-text-left',
		'wfacp_form_section_embed_forms_2_sec_bg_color'      => 'transparent',
		'wfacp_form_section_embed_forms_2_rbox_border_type'  => 'none',
		'wfacp_form_section_embed_forms_2_rbox_border_width' => '1',
		'wfacp_form_section_embed_forms_2_rbox_padding'      => '0',
		'wfacp_form_section_embed_forms_2_rbox_margin'       => '10',
		'wfacp_form_section_embed_forms_2_sub_heading_fs'    => 13,
		'wfacp_form_section_embed_forms_2_sub_heading_talign'    => 'wfacp-text-left',
		'wfacp_form_section_embed_forms_2_sec_sub_heading_color' => '#666666',
		'wfacp_form_section_embed_forms_2_field_style_fs'        => 13,
		'wfacp_form_section_embed_forms_2_step_alignment' => 'center',
		'wfacp_form_section_ct_active_inactive_tab'       => 'active',
		'wfacp_form_section_embed_forms_2_field_border_layout' => 'solid',
		'wfacp_form_section_embed_forms_2_field_style_color' => '#888888',
		'wfacp_form_section_embed_forms_2_field_focus_color' => '#61bdf7',
		'wfacp_form_section_embed_forms_2_field_input_color' => '#404040',
		'wfacp_form_section_payment_methods_sub_heading' => '',
		'wfacp_form_section_embed_forms_2_btn_order-place_fs'                           => 25,
		'wfacp_form_section_embed_forms_2_btn_order-place_top_bottom_padding'           => '14',
		'wfacp_form_section_embed_forms_2_btn_order-place_left_right_padding'           => '22',
		'wfacp_form_section_embed_forms_2_btn_order-place_width'                        => '100%',
		'wfacp_form_section_embed_forms_2_btn_order-place_make_button_sticky_on_mobile' => 'no_sticky',
		'wfacp_form_section_embed_forms_2_additional_text_color'                        => '#000000',
		'wfacp_form_section_embed_forms_2_additional_bg_color'                          => '#f8f8f8',
		'wfacp_form_section_embed_forms_2_validation_color'                             => '#ff0000',
		'wfacp_form_section_embed_forms_2_btn_order-place_text_hover_color'             => '#ffffff',
		'wfacp_form_section_embed_forms_2_form_content_color'                           => '#737373',
		'wfacp_form_section_embed_forms_2_form_content_link_color'                      => '#dd7575',
		'wfacp_form_section_embed_forms_2_section_bg_color'                             => '#ffffff',
		'wfacp_form_section_embed_forms_2_form_content_link_color_type'                 => 'normal',
		'wfacp_form_section_embed_forms_2_form_content_link_hover_color'                => '#965d5d',
	]



];




$steps = [
	'single_step' => [
		'name'          => __( 'Step 1', 'woofunnels-aero-checkout' ),
		'slug'          => 'single_step',
		'friendly_name' => __( 'Single Step Checkout', 'woofunnels-aero-checkout' ),
		'active'        => 'yes',
	],
	'two_step'    => [
		'name'          => __( 'Step 2', 'woofunnels-aero-checkout' ),
		'slug'          => 'two_step',
		'friendly_name' => __( 'Two Step Checkout', 'woofunnels-aero-checkout' ),
		'active'        => 'no',
	],
	'third_step'  => [
		'name'          => __( 'Step 3', 'woofunnels-aero-checkout' ),
		'slug'          => 'third_step',
		'friendly_name' => __( 'Three Step Checkout', 'woofunnels-aero-checkout' ),
		'active'        => 'no',
	],
];


$pageLayout = [
	'steps'                       => $steps,
	'fieldsets'                   => [
		'single_step' => [
			[
				'name'        => __( '', 'woofunnels-aero-checkout' ),
				'class'       => '',
				'sub_heading' => '',
				'fields'      => [
					[
						'label'        => __( 'Email', 'woocommerce' ),
						'required'     => 'true',
						'type'         => 'email',
						'class'        => [ 'form-row-wide', ],
						'validate'     => [ 'email', ],
						'autocomplete' => 'email username',
						'priority'     => '110',
						'id'           => 'billing_email',
						'field_type'   => 'billing',
						'placeholder'  => '',
					],
					[
						'label'        => __( 'First name', 'woocommerce' ),
						'required'     => 'true',
						'class'        => [ 'form-row-first', ],
						'autocomplete' => 'given-name',
						'priority'     => '10',
						'type'         => 'text',
						'id'           => 'billing_first_name',
						'field_type'   => 'billing',
						'placeholder'  => '',
					],
					[
						'label'        => __( 'Last name', 'woocommerce' ),
						'required'     => 'true',
						'class'        => [ 'form-row-last', ],
						'autocomplete' => 'family-name',
						'priority'     => '20',
						'type'         => 'text',
						'id'           => 'billing_last_name',
						'field_type'   => 'billing',
						'placeholder'  => '',
					],
					[
						'label'        => __( 'Phone', 'woocommerce' ),
						'type'         => 'tel',
						'class'        => [ 'form-row-wide' ],
						'id'           => 'billing_phone',
						'field_type'   => 'billing',
						'validate'     => [ 'phone' ],
						'placeholder'  => '',
						'autocomplete' => 'tel',
						'priority'     => 100,
					],
				],
			],
			[
				'name'        => __( 'Shipping Address', 'woofunnels-aero-checkout' ),
				'class'       => '',
				'sub_heading' => '',
				'fields'      => [
					WFACP_Common::get_single_address_fields( 'shipping' ),
					WFACP_Common::get_single_address_fields(),
				],
			],
			[
				'name'        => __( 'Order Summary', 'woofunnels-aero-checkout' ),
				'class'       => 'wfacp_order_summary_box',
				'sub_heading' => '',
				'html_fields' => [
					'shipping_calculator' => 'true',
					'order_coupon'        => 'true',
					'order_summary'       => 'true',
				],
				'fields'      => [
					isset( $advanced_field['shipping_calculator'] ) ? $advanced_field['shipping_calculator'] : [],
					$advanced_field['order_coupon'],
				],
			],
		],
	],
	'product_settings'            => [],
	'have_coupon_field'           => 'true',
	'have_billing_address'        => 'true',
	'have_shipping_address'       => 'true',
	'have_billing_address_index'  => '6',
	'have_shipping_address_index' => '5',
	'enabled_product_switching'   => 'no',
	'have_shipping_method'        => 'true',
	'current_step'                => 'single_step',
];


return [
	'default_customizer_value' => $customizer_data,
	'page_layout'              => $pageLayout,
];