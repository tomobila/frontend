<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('includes/head.php'); ?>


</head>

<body>


    <!-- NAVIGATION
    ================================================== -->


    <?php include('includes/menu.php'); ?>


    <!-- MAIN CONTENT
    ================================================== -->
    <div class="main-content">




        <!-- HEADER -->
        <div class="header">
            <div class="container-fluid">

                <!-- Body -->
                <div class="header-body">
                    <div class="row align-items-end">
                        <div class="col">

                            <!-- Pretitle -->
                            <h6 class="header-pretitle">
                                Overview
                            </h6>

                            <!-- Title -->
                            <h1 class="header-title">
                                Payment activity
                            </h1>

                        </div>
                        <div class="col-auto">

                            <!-- Button -->
                            <a href="#!" class="btn btn-primary lift">
                                Add a payment method
                </a>

                        </div>
                    </div>
                    <!-- / .row -->
                </div>
                <!-- / .header-body -->

            </div>
        </div>
        <!-- / .header -->


        <!-- CARDS -->



        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row align-items-center">

                                <div class="col ml-n2">

                                    <!-- Title -->
                                    <h4 class="mb-1">
                                        <a href="profile-posts.html">Account id</a>
                                    </h4>

                                    <!-- Text -->
                                    <p class="small text-muted mb-1">
                                        179890036296137
                                    </p>

                                    <!-- Status -->
                                    <p class="small mb-0">
                                        <span class="text-success">●</span> Online
                                    </p>

                                </div>
                                <div class="col-auto">

                                    <div class="col-12 py-1 text-center">

                                        <!-- Heading -->
                                        <h6 class="text-uppercase text-muted">
                                            Balance
                                        </h6>

                                        <!-- Value -->
                                        <h2 class="mb-0">0,00 $</h2>

                                    </div>

                                </div>

                            </div>
                            <!-- / .row -->
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">

                            <!-- List group -->
                            <div class="list-group list-group-flush my-n3">
                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <div class="avatar">
                                                <img src="assets/img/payment/mastercard.png" alt="..." class="avatar-img rounded-circle">
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <h4 class="mb-1">
                                                Mastercard <span class="ms-2">•••• 4584</span>
                                            </h4>


                                            <p class="small mb-0">
                                                Expires 12/22
                                            </p>


                                        </div>
                                        <div class="col-auto">
                                            <span class="badge badge-soft-success">
                                                primaire
                                              </span>
                                        </div>
                                        <div class="col-auto">

                                            <div class="dropdown">
                                                <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="false" data-expanded="false" aria-expanded="false">
                                                    <i class="fe fe-more-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">

                                                    <a href="#" class="dropdown-item"> <span class='fe fe-trash-2 mr-2'></span> Delete</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <div class="avatar">
                                                <img src="assets/img/payment/discover.png" alt="..." class="avatar-img rounded-circle">
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <h4 class="mb-1">
                                                Discover <span class="ms-2">•••• 5796</span>
                                            </h4>


                                            <p class="small mb-0">
                                                Expires 12/22
                                            </p>

                                        </div>
                                        <div class="col-auto">

                                            <div class="dropdown">
                                                <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="false" data-expanded="false" aria-expanded="false">
                                                    <i class="fe fe-more-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-pocket mr-2"></span> Set as primary</a>
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-edit-3 mr-2"></span> Edit</a>
                                                    <a href="#" class="dropdown-item"> <span class='fe fe-trash-2 mr-2'></span> Delete</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <div class="avatar">
                                                <img src="data:image/png;base64,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"
                                                    alt="..." class="avatar-img rounded-circle">
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <h4 class="mb-1">
                                                Paypal <span class="ms-2">P••••c@gmail.com </span>
                                            </h4>

                                            <p class="small mb-0">
                                                Added 03/19
                                            </p>

                                        </div>
                                        <div class="col-auto">

                                            <div class="dropdown">
                                                <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="false" data-expanded="false" aria-expanded="false">
                                                    <i class="fe fe-more-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-pocket mr-2"></span> Set as primary</a>
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-edit-3 mr-2"></span> Edit</a>
                                                    <a href="#" class="dropdown-item"> <span class='fe fe-trash-2 mr-2'></span> Delete</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <div class="avatar">
                                                <img src="assets/img/payment/american.png" alt="..." class="avatar-img rounded-circle">
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <h4 class="mb-1">
                                                American <span class="ms-2">•••• 4875</span>
                                            </h4>


                                            <p class="small mb-0">
                                                Expires 12/24
                                            </p>

                                        </div>
                                        <div class="col-auto">

                                            <div class="dropdown">
                                                <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="false" data-expanded="false" aria-expanded="false">
                                                    <i class="fe fe-more-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-pocket mr-2"></span> Set as primary</a>
                                                    <a href="#" class="dropdown-item"> <span class="fe fe-edit-3 mr-2"></span> Edit</a>
                                                    <a href="#" class="dropdown-item"> <span class='fe fe-trash-2 mr-2'></span> Delete</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <!-- / .card-body -->
                    </div>



                    <div class="card">
                        <div class="card-header">

                            <!-- Title -->
                            <h4 class="card-header-title">
                                Invoices
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table table-sm table-nowrap card-table">
                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Date</th>
                                        <th>Method of payment</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody class="font-size-base">
                                    <tr>
                                        <td>
                                            <a href="#">Invoice #10395</a>
                                        </td>
                                        <td>
                                            <time datetime="2021-04-24">Apr. 24, 2021</time>
                                        </td>
                                        <td>
                                            <div class="row align-items-center">
                                                <div class="col-auto">

                                                    <!-- Avatar -->
                                                    <a href="#!" class="avatar avatar-xs">
                                                        <img src="data:image/png;base64,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"
                                                            alt=" ... " class="avatar-img rounded ">
                                                    </a>

                                                </div>
                                                <div class="col ml-n2 ">

                                                    <!-- Title -->
                                                    <h4 class="font-weight-normal mb-1 ">
                                                        <a href="#! ">PayPal</a>
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted ">
                                                        lahrai…@gmail.com
                                                  </small>

                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            $29.00
                                        </td>
                                        <td>
                                            <span class="badge badge-danger ">Echeck</span>
                                        </td>
                                        <td>
                                            <a href="# " class="avatar avatar-sm ">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary ">
                                                    <i class="fe fe-download "></i>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="# ">Invoice #10244</a>
                                        </td>
                                        <td>
                                            <time datetime="2021-03-24 ">Mar. 24, 2021</time>
                                        </td>
                                        <td>
                                            <div class="row align-items-center">
                                                <div class="col-auto">

                                                    <!-- Avatar -->
                                                    <a href="#!" class="avatar avatar-xs">
                                                        <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt=" ... " class="avatar-img rounded ">
                                                    </a>

                                                </div>
                                                <div class="col ml-n2 ">

                                                    <!-- Title -->
                                                    <h4 class="font-weight-normal mb-1 ">
                                                        <a href="#! ">MasterCard</a>
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted ">
                                                        6927
                                                  </small>

                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            $29.00
                                        </td>
                                        <td>
                                            <span class="badge badge-success ">Paid</span>
                                        </td>
                                        <td>
                                            <a href="# " class="avatar avatar-sm ">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary ">
                                                    <i class="fe fe-download "></i>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="# ">Invoice #10119</a>
                                        </td>
                                        <td>
                                            <time datetime="2021-02-24 ">Feb. 24, 2021</time>
                                        </td>
                                        <td>
                                            <div class="row align-items-center">
                                                <div class="col-auto">

                                                    <!-- Avatar -->
                                                    <a href="#!" class="avatar avatar-xs">
                                                        <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt=" ... " class="avatar-img rounded ">
                                                    </a>

                                                </div>
                                                <div class="col ml-n2 ">

                                                    <!-- Title -->
                                                    <h4 class="font-weight-normal mb-1 ">
                                                        <a href="#! ">MasterCard</a>
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted ">
                                                        6927
                                                  </small>

                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            $29.00
                                        </td>
                                        <td>
                                            <span class="badge badge-success ">Paid</span>
                                        </td>
                                        <td>
                                            <a href="# " class="avatar avatar-sm ">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary ">
                                                    <i class="fe fe-download "></i>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="# ">Invoice #10062</a>
                                        </td>
                                        <td>
                                            <time datetime="2021-01-24 ">Jan. 24, 2021</time>
                                        </td>
                                        <td>
                                            <div class="row align-items-center">
                                                <div class="col-auto">

                                                    <!-- Avatar -->
                                                    <a href="#!" class="avatar avatar-xs">
                                                        <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt=" ... " class="avatar-img rounded ">
                                                    </a>

                                                </div>
                                                <div class="col ml-n2 ">

                                                    <!-- Title -->
                                                    <h4 class="font-weight-normal mb-1 ">
                                                        <a href="#! ">MasterCard</a>
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted ">
                                                        6927
                                                  </small>

                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            $15.30
                                        </td>
                                        <td>
                                            <span class="badge badge-success ">Paid</span>
                                        </td>
                                        <td>
                                            <a href="# " class="avatar avatar-sm ">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary ">
                                                    <i class="fe fe-download "></i>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
    <!-- / .main-content -->

    <!-- JAVASCRIPT
    ================================================== -->
    <!-- Libs JS -->
    <script src="assets/libs/jquery/dist/jquery.min.js "></script>
    <script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
    <script src="assets/libs/@shopify/draggable/lib/es5/draggable.bundle.legacy.js "></script>
    <script src="assets/libs/autosize/dist/autosize.min.js "></script>
    <script src="assets/libs/chart.js/dist/Chart.min.js "></script>
    <script src="assets/libs/dropzone/dist/min/dropzone.min.js "></script>
    <script src="assets/libs/flatpickr/dist/flatpickr.min.js "></script>
    <script src="assets/libs/highlightjs/highlight.pack.min.js "></script>
    <script src="assets/libs/jquery-mask-plugin/dist/jquery.mask.min.js "></script>
    <script src="assets/libs/list.js/dist/list.min.js "></script>
    <script src="assets/libs/quill/dist/quill.min.js "></script>
    <script src="assets/libs/select2/dist/js/select2.full.min.js "></script>
    <script src="assets/libs/chart.js/Chart.extension.js "></script>

    <!-- Map -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>

    <!-- Theme JS -->
    <!-- <script src="assets/js/theme.min.js "></script> -->


</body>

</html>