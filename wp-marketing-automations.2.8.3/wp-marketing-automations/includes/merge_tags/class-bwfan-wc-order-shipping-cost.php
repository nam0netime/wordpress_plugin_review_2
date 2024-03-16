<?php

class BWFAN_WC_Order_Shipping_Cost extends BWFAN_Merge_Tag {

	private static $instance = null;

	public function __construct() {
		$this->tag_name        = 'order_shipping_cost';
		$this->tag_description = __( 'Order Shipping Cost', 'wp-marketing-automations' );
		add_shortcode( 'bwfan_order_shipping_cost', array( $this, 'parse_shortcode' ) );
		$this->support_fallback = false;
	}

	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Parse the merge tag and return its value.
	 *
	 * @param $attr
	 *
	 * @return int|mixed|void
	 */
	public function parse_shortcode( $attr ) {
		if ( true === BWFAN_Merge_Tag_Loader::get_data( 'is_preview' ) ) {
			return $this->get_dummy_preview( $attr );
		}

		$order_id = BWFAN_Merge_Tag_Loader::get_data( 'order_id' );
		if ( empty( $order_id ) ) {
			return $this->parse_shortcode_output( '', $attr );
		}

		$order = wc_get_order( $order_id );
		if ( ! $order instanceof WC_Order ) {
			return $this->parse_shortcode_output( '', $attr );
		}

		$formatting = BWFAN_Common::get_formatting_for_wc_price( $attr, $order );

		$order_shipping_cost = ( ! empty( $order->get_shipping_total() ) ) ? $order->get_shipping_total() : 0;
		$order_shipping_cost = BWFAN_Common::get_formatted_price_wc( $order_shipping_cost, $formatting['raw'], $formatting['currency'] );
		$order_shipping_cost = apply_filters( 'bwfan_order_shipping_cost_merge_format', $order_shipping_cost, $order );

		return $this->parse_shortcode_output( $order_shipping_cost, $attr );
	}

	/**
	 * Show dummy value
	 *
	 * @return integer
	 */
	public function get_dummy_preview( $attr ) {
		$formatting = BWFAN_Common::get_formatting_for_wc_price( $attr, '' );

		return BWFAN_Common::get_formatted_price_wc( 25, $formatting['raw'], $formatting['currency'] );
	}

	/**
	 * Return mergetag schema
	 *
	 * @return array[]
	 */
	public function get_setting_schema() {
		$options = [
			[
				'value' => 'raw',
				'label' => 'Raw',
			],
			[
				'value' => 'formatted',
				'label' => 'Formatted',
			],
			[
				'value' => 'formatted-currency',
				'label' => 'Formatted with currency',
			],
		];

		return [
			[
				'id'          => 'format',
				'type'        => 'select',
				'options'     => $options,
				'label'       => __( 'Display', 'wp-marketing-automations' ),
				"class"       => 'bwfan-input-wrapper',
				"placeholder" => 'Raw',
				"required"    => false,
				"description" => ""
			],
		];
	}
}

/**
 * Register this merge tag to a group.
 */
if ( bwfan_is_woocommerce_active() ) {
	BWFAN_Merge_Tag_Loader::register( 'wc_order', 'BWFAN_WC_Order_Shipping_Cost', null, 'Order' );
}
