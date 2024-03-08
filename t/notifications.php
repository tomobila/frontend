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
                                Notifications
                            </h1>

                        </div>
                        <div class="col-auto">

                            <!-- Button -->
                            <!-- <a href="#!" class="btn btn-primary lift">
                  Get Workspace
                </a> -->

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
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="list-group list-group-flush my-n3">

                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <!-- Image -->
                                            <div class="avatar avatar-sm">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
                                                    <i class="fe fe-bell-off"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <!-- Heading -->
                                            <h4 class="mb-1">
                                                Do not distrub
                                            </h4>

                                            <!-- Time -->
                                            <small class="text-muted">Pause all notifications</small>

                                        </div>
                                        <div class="col-auto">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="distrubNotif">
                                                <label class="custom-control-label" for="distrubNotif"></label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <!-- Image -->
                                            <div class="avatar avatar-sm">
                                                <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
                                                    <i class="fe fe-clock"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col ml-n2">

                                            <!-- Heading -->
                                            <h4 class="mb-1">
                                                Schedule notifications
                                            </h4>

                                            <!-- Time -->
                                            <small class="text-muted">Pause all notifications</small>

                                        </div>
                                        <div class="col-auto">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="scheduleNotif" checked>
                                                <label class="custom-control-label" for="scheduleNotif"></label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <p class="text-muted">
                                Send notification on
                            </p>

                            <div class="d-flex weeks">
                                <button class="btn btn-outline-secondary mr-3 bg-light">
                                    Mo
                                  </button>
                                <button class="btn btn-outline-secondary mr-3 bg-light">
                                    Tu
                                  </button>
                                <button class="btn btn-outline-secondary mr-3 bg-light">
                                    We
                                  </button>
                                <button class="btn btn-outline-secondary mr-3">
                                    Th
                                  </button>
                                <button class="btn btn-outline-secondary mr-3 bg-light">
                                    Fr
                                  </button>
                                <button class="btn btn-outline-secondary mr-3">
                                    Sa
                                  </button>
                                <button class="btn btn-outline-secondary mr-3">
                                    Su
                                  </button>
                            </div>
                        </div>

                        <div class="card-body">
                            <p class="text-muted">
                                Send notification on
                            </p>

                            <div class="row d-flex align-items-center">
                                <div class="col-12 col-md-5">

                                    <!-- First name -->
                                    <div class="form-group mb-0">

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="5:00 PM">

                                    </div>

                                </div>

                                <div class="col-2 d-flex justify-content-center align-items-center">to</div>

                                <div class="col-12 col-md-5">

                                    <!-- First name -->
                                    <div class="form-group mb-0">

                                        </label>

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="9:00 PM">

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-8">

                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3 align-items-center">

                                <!-- Title -->
                                <h4 class="col">
                                    Notification Email
                                </h4>

                                <!-- Button -->
                                <button class="col-auto btn btn-sm btn-white border-0">
                                  Add another email
                                </button>

                            </div>


                            <div class="row d-flex align-items-center">
                                <div class="col-12 ">

                                    <!-- First name -->
                                    <div class="form-group mb-0">

                                        <!-- Input -->
                                        <input type="text" class="form-control form-control-lg" value="Philippe@globres.com">

                                    </div>

                                </div>


                            </div>
                        </div>

                        <div class="card-body">
                            <p class="text-muted">
                                Send email when
                            </p>

                            <table class="table table-sm table-nowrap card-table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th class="text-center">Call</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">SMS</th>
                                    </tr>
                                </thead>
                                <tbody class="font-size-base">
                                    <tr>
                                        <td>
                                            Direct messages
                                        </td>
                                        <td class="text-center"></td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="emailCheckboxOne" checked="">
                                                <label class="custom-control-label" for="emailCheckboxOne"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="smsCheckboxOne" checked="">
                                                <label class="custom-control-label" for="smsCheckboxOne"></label>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Reminders
                                        </td>
                                        <td class="text-center"></td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="emailCheckboxTwo" checked="">
                                                <label class="custom-control-label" for="emailCheckboxTwo"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="smsCheckboxTwo" checked="">
                                                <label class="custom-control-label" for="smsCheckboxTwo"></label>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            API Limits
                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="callCheckboxThree">
                                                <label class="custom-control-label" for="callCheckboxThree"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="emailCheckboxThree" checked="">
                                                <label class="custom-control-label" for="emailCheckboxThree"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="smsCheckboxThree" checked="">
                                                <label class="custom-control-label" for="smsCheckboxThree"></label>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Policy &amp; Community
                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="callCheckboxFour">
                                                <label class="custom-control-label" for="callCheckboxFour"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="emailCheckboxFour" checked="">
                                                <label class="custom-control-label" for="emailCheckboxFour"></label>
                                            </div>

                                        </td>
                                        <td class="text-center">

                                            <!-- Checkbox -->
                                            <div class="custom-control custom-checkbox mr-n3">
                                                <input type="checkbox" class="custom-control-input" id="smsCheckboxFour" checked="">
                                                <label class="custom-control-label" for="smsCheckboxFour"></label>
                                            </div>

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
    <script src="assets/libs/jquery/dist/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/@shopify/draggable/lib/es5/draggable.bundle.legacy.js"></script>
    <script src="assets/libs/autosize/dist/autosize.min.js"></script>
    <script src="assets/libs/chart.js/dist/Chart.min.js"></script>
    <script src="assets/libs/dropzone/dist/min/dropzone.min.js"></script>
    <script src="assets/libs/flatpickr/dist/flatpickr.min.js"></script>
    <script src="assets/libs/highlightjs/highlight.pack.min.js"></script>
    <script src="assets/libs/jquery-mask-plugin/dist/jquery.mask.min.js"></script>
    <script src="assets/libs/list.js/dist/list.min.js"></script>
    <script src="assets/libs/quill/dist/quill.min.js"></script>
    <script src="assets/libs/select2/dist/js/select2.full.min.js"></script>
    <script src="assets/libs/chart.js/Chart.extension.js"></script>

    <!-- Map -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>

    <!-- Theme JS -->
    <script>
        jQuery('.weeks button').click(function() {
            jQuery(this).toggleClass('bg-light');
        })
    </script>


</body>

</html>