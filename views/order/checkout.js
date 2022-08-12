<div id="post-119" class="post-119 page type-page status-publish hentry">
  <div class="container mt-100 mb-100">
    <div class="row">
      <div class="col-sm-12">
        <div class="woocommerce">
          <div class="woocommerce-notices-wrapper"></div>

          <div class="SpecialHeading mb-100">
            <h2 class="special-title special-heading-letter">Order</h2>
            <p>Process Order</p>
            <p class="text-muted text-small">Click the appropraite checkbox!</p>
          </div>

          <form class="login" method="POST" action="/order/edit">
            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
             
              <div class="book_group">
                <input
                  type="checkbox"
                  name="processing"
                  id="processing"
                  value="Processing"
                />
                <label for="processing">Processing</label>
                <br />
                <input
                  type="checkbox"
                  name="delivered"
                  id="delivered"
                  value="Delivered"
                />
                <label for="delivered">Delivered</label>
              </div>
            </p>

            <p class="form-row">
              <input
                type="submit"
                class="woocommerce-Button button"
                name="checkout"
                value="Checkout"
              />
            </p>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</div>;
