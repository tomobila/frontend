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
                                Recieved
                            </h6>

                            <!-- Title -->
                            <h1 class="header-title">
                                Invitations
                            </h1>

                        </div>
                        <div class="col-auto">

                            <!-- Button -->
                            <!-- <a href="#!" class="btn btn-primary lift">
                  Get
                </a> -->

                        </div>
                    </div>
                    <!-- / .row -->
                </div>
                <!-- / .header-body -->

            </div>
        </div>
        <!-- / .header -->



        <div class="container-fluid">
            <h2 class="mb-3">
                Invitations List
            </h2>
            <p class="text-muted">
                It is a long established fact that a reader will be distracted by the readable content of a page </p>

            <ul class="mt-3 nav nav-tabs" id="" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="Users-tab" data-toggle="tab" href="#Users" role="tab" aria-controls="Users" aria-selected="true">You have been invited to</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="Partners-tab" data-toggle="tab" href="#Partners" role="tab" aria-controls="Partners" aria-selected="false">You have sent invitations to</a>
                </li>

            </ul>
            <div class="tab-content mt-4" id="">

                <div class="tab-pane fade show active" id="Users" role="tabpanel" aria-labelledby="Users-tab">

                    <div>


                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">

                                        <!-- Avatar -->
                                        <div class="avatar avatar-lg">
                                            <img src="https://design.globres.io/RR-DESIGNER/lp/img/dashboard.png" alt="..." class="avatar-img rounded-circle">
                                        </div>

                                    </div>
                                    <div class="col ml-n2">

                                        <!-- Title -->
                                        <h4 class="mb-1">
                                            Carole Knapp
                                        </h4>

                                        <!-- Text -->
                                        <p class="small  mb-1">
                                            RealRate Tool
                                        </p>

                                        <!-- Status -->
                                        <p class="small mb-0">
                                            <a class="text-muted" href="mailto:CaroleTKnapp@armyspy.com">CaroleTKnapp@armyspy.com</a>
                                        </p>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Button -->
                                        <a href="#!" class="btn btn-danger mr-3">Decline</a>
                                        <a href="#!" class="btn btn-primary">Accept</a>

                                    </div>

                                </div>
                                <!-- / .row -->
                            </div>
                            <!-- / .card-body -->
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">

                                        <!-- Avatar -->
                                        <div class="avatar avatar-lg">
                                            <img src="https://design.globres.io/RR-DESIGNER/lp/img/dashboard.png" alt="..." class="avatar-img rounded-circle">
                                        </div>

                                    </div>
                                    <div class="col ml-n2">

                                        <!-- Title -->
                                        <h4 class="mb-1">
                                            Carole Knapp
                                        </h4>

                                        <!-- Text -->
                                        <p class="small  mb-1">
                                            RealRate Tool
                                        </p>

                                        <!-- Status -->
                                        <p class="small mb-0">
                                            <a class="text-muted" href="mailto:CaroleTKnapp@armyspy.com">CaroleTKnapp@armyspy.com</a>
                                        </p>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Button -->
                                        <a href="#!" class="btn btn-danger mr-3">Decline</a>
                                        <a href="#!" class="btn btn-primary">Accept</a>

                                    </div>

                                </div>
                                <!-- / .row -->
                            </div>
                            <!-- / .card-body -->
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">

                                        <!-- Avatar -->
                                        <div class="avatar avatar-lg">
                                            <img src="https://design.globres.io/RR-DESIGNER/lp/img/dashboard.png" alt="..." class="avatar-img rounded-circle">
                                        </div>

                                    </div>
                                    <div class="col ml-n2">

                                        <!-- Title -->
                                        <h4 class="mb-1">
                                            Carole Knapp
                                        </h4>

                                        <!-- Text -->
                                        <p class="small  mb-1">
                                            RealRate Tool
                                        </p>

                                        <!-- Status -->
                                        <p class="small mb-0">
                                            <a class="text-muted" href="mailto:CaroleTKnapp@armyspy.com">CaroleTKnapp@armyspy.com</a>
                                        </p>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Button -->
                                        <a href="#!" class="btn btn-danger mr-3">Decline</a>
                                        <a href="#!" class="btn btn-primary">Accept</a>

                                    </div>

                                </div>
                                <!-- / .row -->
                            </div>
                            <!-- / .card-body -->
                        </div>
                    </div>


                </div>

                <div class="tab-pane fade" id="Partners" role="tabpanel" aria-labelledby="Partners-tab">
                    <div class="card" data-list="{&quot;valueNames&quot;: [&quot;orders-order&quot;, &quot;orders-product&quot;, &quot;orders-date&quot;, &quot;orders-total&quot;, &quot;orders-status&quot;, &quot;orders-method&quot;]}">
                        <!-- <div class="card-header">

                            <form>
                                <div class="input-group input-group-flush">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                  <i class="fe fe-search"></i>
                                </span>
                                    </div>
                                    <input class="form-control list-search" type="search" placeholder="Search">
                                </div>
                            </form>

                        </div> -->
                        <div class="table-responsive">
                            <table class="table table-sm table-nowrap card-table">
                                <thead>
                                    <tr>

                                        <th>
                                            <a href="#" class="text-muted list-sort">
                                      Name
                                    </a>
                                        </th>
                                        <th>
                                            <a href="#" class="text-muted list-sort">
                                      Workspace
                                    </a>
                                        </th>
                                        <th>
                                            <a href="#" class="text-muted list-sort" data-sort="orders-date">
                                      Date
                                    </a>
                                        </th>

                                        <th>
                                            <a href="#" class="text-muted list-sort" data-sort="orders-status">
                                      Actions
                                    </a>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr>

                                        <td class="orders-order">
                                            Curtis Poole
                                        </td>
                                        <td class="orders-product">
                                            <a href="#" target="_blank" rel="">Reputation Tool</a>
                                        </td>
                                        <td class="orders-date">
                                            <time datetime="2018-07-30">17/09/21</time>
                                        </td>

                                        <td class="orders-status">

                                            <a href="#!" class="btn btn-sm btn-success">Accepted</a>


                                        </td>


                                    </tr>
                                    <tr>

                                        <td class="orders-order">
                                            Bisar Botros
                                        </td>
                                        <td class="orders-product">
                                            <a href="#" target="_blank" rel="">Advertising Tool</a>
                                        </td>
                                        <td class="orders-date">
                                            <time datetime="2018-07-30">03/11/21</time>
                                        </td>

                                        <td class="orders-status">

                                            <a href="#!" class="btn btn-sm btn-danger mr-3">Revoke</a>
                                            <a href="#!" class="btn btn-sm btn-light">Resend</a>

                                        </td>


                                    </tr>
                                    <tr>

                                        <td class="orders-order">
                                            Kathryn C. Smith
                                        </td>
                                        <td class="orders-product">
                                            <a href="#" target="_blank" rel="">Reputation Tool</a>
                                        </td>
                                        <td class="orders-date">
                                            <time datetime="2018-07-30">17/09/21</time>
                                        </td>

                                        <td class="orders-status">

                                            <a href="#!" class="btn btn-sm btn-success">Accepted</a>

                                        </td>


                                    </tr>
                                    <tr>

                                        <td class="orders-order">
                                            Bisar Botros
                                        </td>
                                        <td class="orders-product">
                                            <a href="#" target="_blank" rel="">Advertising Tool</a>
                                        </td>
                                        <td class="orders-date">
                                            <time datetime="2018-07-30">03/11/21</time>
                                        </td>

                                        <td class="orders-status">

                                            <a href="#!" class="btn btn-sm btn-danger mr-3">Revoke</a>
                                            <a href="#!" class="btn btn-sm btn-light">Resend</a>

                                        </td>


                                    </tr>
                                    <tr>

                                        <td class="orders-order">
                                            Bisar Botros
                                        </td>
                                        <td class="orders-product">
                                            <a href="#" target="_blank" rel="">Advertising Tool</a>
                                        </td>
                                        <td class="orders-date">
                                            <time datetime="2018-07-30">03/11/21</time>
                                        </td>

                                        <td class="orders-status">

                                            <a href="#!" class="btn btn-sm btn-danger mr-3">Revoke</a>
                                            <a href="#!" class="btn btn-sm btn-light">Resend</a>

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
        const searchInput = document.querySelector("#search_workspace");

        searchInput.addEventListener("keyup", recherche);

        function recherche() {
            console.log("test");

            let filter, allLi, titleValue, allTitles;
            filter = searchInput.value.toUpperCase();
            allLi = document.querySelectorAll('.workspace');
            allTitles = document.querySelectorAll('.workspace .item-name');

            for (let i = 0; i < allLi.length; i++) {

                titleValue = allTitles[i].innerText;

                if (titleValue.toUpperCase().indexOf(filter) > -1) {
                    allLi[i].style.display = 'flex';
                } else {
                    allLi[i].style.display = 'none';
                }

            }

        }
    </script>


</body>

</html>