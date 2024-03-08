<!DOCTYPE html>
<html lang="en">

<head>

    <?php include('includes/head.php'); ?>

</head>

<body>


    <!-- NAVIGATION
    ================================================== -->

    <?php include('includes/menu.php'); ?>


    <div class="modal fade fixed-right" id="setting_workspace" tabindex="-1" role="dialog" aria-modal="false">
        <div class="modal-dialog modal-dialog-vertical" role="document" style="width: 50%; max-width: none">
            <div class="modal-content">
                <div class="modal-card card">

                    <div class="card-body">
                        <div class="header-body">
                            <div class="row align-items-center">
                                <div class="col-auto">

                                    <!-- Avatar -->
                                    <div class="avatar avatar-lg ">
                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                    </div>

                                </div>
                                <div class="col ml-n3 ml-md-n2">

                                    <!-- Pretitle -->

                                    <!-- Title -->
                                    <h2 class="header-title">
                                        Advertising Tool
                                    </h2>
                                    <h6 class="header-pretitle">
                                        Workspace
                                    </h6>

                                </div>
                                <div class="col-auto">

                                    <!-- Button -->
                                    <a href="#!" class="btn btn-lg btn-white ">
                                        <span class="fe fe-link mr-2"></span> Go to platform
                                    </a>

                                </div>

                            </div>
                            <!-- / .row -->

                            <ul class="mt-3 nav nav-tabs" id="" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="Users-tab" data-toggle="tab" href="#Users" role="tab" aria-controls="Users" aria-selected="true">Users</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a class="nav-link" id="Partners-tab" data-toggle="tab" href="#Partners" role="tab" aria-controls="Partners" aria-selected="false">Partners</a>
                                </li> -->
                                <li class="nav-item">
                                    <a class="nav-link" id="Notifications-tab" data-toggle="tab" href="#Notifications" role="tab" aria-controls="Notifications" aria-selected="false">Notifications</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Upgrade-tab" data-toggle="tab" href="#Upgrade" role="tab" aria-controls="Upgrade" aria-selected="false">Upgrade</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Settings-tab" data-toggle="tab" href="#Settings" role="tab" aria-controls="Settings" aria-selected="false">Settings</a>
                                </li>
                            </ul>

                            <div class="tab-content mt-4" id="">

                                <div class="tab-pane fade show active px-4" id="Users" role="tabpanel" aria-labelledby="Users-tab">

                                    <div class="row align-items-center mb-3">
                                        <div class="col">


                                            <h1 class="header-title">
                                                Users
                                            </h1>

                                        </div>
                                        <div class="col-auto">
                                            <a href="#!" data-toggle="modal" data-target="#modalMembers" class="btn btn-light"> <span class="fe fe-user-plus mr-2"></span>Add users</a>
                                        </div>
                                    </div>

                                    <p class="text-muted">
                                        These people have access to Advertising tool You can view, edit, or remove their permissions.
                                    </p>

                                    <div class="input-group input-group-m input-group-merge">

                                        <input type="text" class="form-control form-control-prepended list-search" placeholder="Search">

                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <span class="fe fe-search"></span>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="accordion" class="mt-4">
                                        <div class="card mb-3">
                                            <div class="card-header px-0 workspace__user" id="h1">

                                                <button class="btn btn-link" data-toggle="collapse" data-target="#c1" aria-expanded="true" aria-controls="c1">
                                                        <div class="row align-items-center">
                                                            <div class="col-auto">
        
                                                                <div class="avatar">
                                                                    <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                                                </div>
        
                                                            </div>
                                                            <div class="col ml-n2 text-left text-dark">
        
                                                                <h4 class="mb-1">
                                                                    Richard L. Finday
                                                                </h4>
        
                                                                <p class="small mb-0">
                                                                    <a href="mailto:HowardLBrown@jourrapide.com"> richardlfinday@teleworm.us</a>
                                                                </p>
        
                                                            </div>
                                                            <div class="col-auto">

                                                                <a href="#!" class="btn btn-sm btn-white remove">
                                                                    <span class="fe fe-trash-2"></span>
                                                                </a>
                                                                <a href="#!" class="btn btn-sm btn-white border-0">
                                                                    <span class="fe fe-chevron-down"></span>
                                                                </a>
        
                                                            </div>
                                                        </div>
                                                </button>

                                            </div>

                                            <div id="c1" class="collapse show" aria-labelledby="h1" data-parent="#accordion">
                                                <div class="card-body bg-light">
                                                    <div class="row py-3 bg-white">
                                                        <div class="col-12">
                                                            <h4>
                                                                Partial access
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Advertising platform
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Publish as admin
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u1-1">
                                                                        <label class="custom-control-label" for="u1-1"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                    Advertising platform - Analytics 
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u1-2" checked="">
                                                                        <label class="custom-control-label" for="u1-2"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                    Advertising platform - Emailing
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms n
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u1-3" checked="">
                                                                        <label class="custom-control-label" for="u1-3"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <hr class="divider my-4">

                                                        <div class="col-12">
                                                            <h4>
                                                                Total control
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Manages the platform
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Control the Platform and account settings and permissions. Perform all kinds of actions, view all activities and statistics and manage the roles of the Page. This is the most comprehensive access you can assign.                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u1-4">
                                                                        <label class="custom-control-label" for="u1-4"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-3">
                                            <div class="card-header px-0 workspace__user" id="h2">

                                                <button class="btn btn-link" data-toggle="collapse" data-target="#c2" aria-expanded="false" aria-controls="c2">
                                                        <div class="row align-items-center">
                                                            <div class="col-auto">
        
                                                                <div class="avatar">
                                                                    <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                                                </div>
        
                                                            </div>
                                                            <div class="col ml-n2 text-left text-dark">
        
                                                                <h4 class="mb-1">
                                                                    Howard Brown
                                                                </h4>
        
                                                                <p class="small mb-0">
                                                                    <a href="mailto:HowardLBrown@jourrapide.com"> howardbrown@jourrapide.com</a>
                                                                </p>
        
                                                            </div>
                                                            <div class="col-auto">

                                                                <a href="#!" class="btn btn-sm btn-white remove">
                                                                    <span class="fe fe-trash-2"></span>
                                                                </a>
                                                                <a href="#!" class="btn btn-sm btn-white border-0">
                                                                    <span class="fe fe-chevron-down"></span>
                                                                </a>
        
                                                            </div>
                                                        </div>
                                                </button>

                                            </div>

                                            <div id="c2" class="collapse" aria-labelledby="h2" data-parent="#accordion">
                                                <div class="card-body bg-light">
                                                    <div class="row py-3 bg-white">
                                                        <div class="col-12">
                                                            <h4>
                                                                Partial access
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 1 
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Publish as admin
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u2-1">
                                                                        <label class="custom-control-label" for="u2-1"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 2
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u2-2" checked="">
                                                                        <label class="custom-control-label" for="u2-2"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 3
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms n
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u2-3">
                                                                        <label class="custom-control-label" for="u2-3"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <hr class="divider my-4">

                                                        <div class="col-12">
                                                            <h4>
                                                                Total control
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Manages the platform
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Control the Platform and account settings and permissions. Perform all kinds of actions, view all activities and statistics and manage the roles of the Page. This is the most comprehensive access you can assign.                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u2-4">
                                                                        <label class="custom-control-label" for="u2-4"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-3">
                                            <div class="card-header px-0 workspace__user" id="h3">

                                                <button class="btn btn-link" data-toggle="collapse" data-target="#c3" aria-expanded="false" aria-controls="c3">
                                                        <div class="row align-items-center">
                                                            <div class="col-auto">
        
                                                                <div class="avatar">
                                                                    <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                                                </div>
        
                                                            </div>
                                                            <div class="col ml-n2 text-left text-dark">
        
                                                                <h4 class="mb-1">
                                                                    Debra Macklin
                                                                </h4>
        
                                                                <p class="small mb-0">
                                                                    <a href="mailto:DebraAMacklin@teleworm.us">debraamacklin@teleworm.us</a>
                                                                </p>
        
                                                            </div>
                                                            <div class="col-auto">

                                                                <a href="#!" class="btn btn-sm btn-white remove">
                                                                    <span class="fe fe-trash-2"></span>
                                                                </a>
                                                                <a href="#!" class="btn btn-sm btn-white border-0">
                                                                    <span class="fe fe-chevron-down"></span>
                                                                </a>
        
                                                            </div>
                                                        </div>
                                                </button>

                                            </div>

                                            <div id="c3" class="collapse" aria-labelledby="h3" data-parent="#accordion">
                                                <div class="card-body bg-light">
                                                    <div class="row py-3 bg-white">
                                                        <div class="col-12">
                                                            <h4>
                                                                Partial access
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 1 
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Publish as admin
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u3-1" checked="">
                                                                        <label class="custom-control-label" for="u3-1"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 2
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u3-2">
                                                                        <label class="custom-control-label" for="u3-2"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Module 3
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Making your profile public means that anyone on the platforms 
                                                                    </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u3-3">
                                                                        <label class="custom-control-label" for="u3-3"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <hr class="divider my-4">

                                                        <div class="col-12">
                                                            <h4>
                                                                Total control
                                                            </h4>
                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class="col">
                                                                    <label class="mb-1">
                                                                        Manages the platform
                                                                    </label>

                                                                    <small class="form-text text-muted">
                                                                        Control the Platform and account settings and permissions. Perform all kinds of actions, view all activities and statistics and manage the roles of the Page. This is the most comprehensive access you can assign.                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u3-4">
                                                                        <label class="custom-control-label" for="u3-4"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                                <div class="tab-pane fade" id="Partners" role="tabpanel" aria-labelledby="Partners-tab">

                                </div>
                                <div class="tab-pane fade" id="Notifications" role="tabpanel" aria-labelledby="Notifications-tab">
                                    <div class="card-body">

                                        <div class="list-group list-group-flush my-n3">
                                            <div class="list-group-item">
                                                <div class="row align-items-center">
                                                    <div class="col">

                                                        <h4 class="font-weight-base mb-1">
                                                            Sales &amp; Promotions
                                                        </h4>

                                                        <small class="text-muted">
                                        We only notify you for significant promotions
                                        </small>
                                                    </div>
                                                    <div class="col-auto">

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="subscriptionsSwitchOne" checked="">
                                                            <label class="custom-control-label" for="subscriptionsSwitchOne"></label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="list-group-item">
                                                <div class="row align-items-center">
                                                    <div class="col">

                                                        <h4 class="font-weight-base mb-1">
                                                            Product updates
                                                        </h4>

                                                        <small class="text-muted">
                                        Major changes in our product offering
                                        </small>
                                                    </div>
                                                    <div class="col-auto">

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="subscriptionsSwitchTwo" checked="">
                                                            <label class="custom-control-label" for="subscriptionsSwitchTwo"></label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="list-group-item">
                                                <div class="row align-items-center">
                                                    <div class="col">

                                                        <h4 class="font-weight-base mb-1">
                                                            Newsletter
                                                        </h4>

                                                        <small class="text-muted">
                                        Updates on what’s going on here at Landkit.
                                        </small>
                                                    </div>
                                                    <div class="col-auto">

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="subscriptionsSwitchThree" checked="">
                                                            <label class="custom-control-label" for="subscriptionsSwitchThree"></label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="Upgrade" role="tabpanel" aria-labelledby="Upgrade-tab">
                                    <div class="list row">
                                        <div class="col-12 col-md-6 col-xl-4">

                                            <!-- Card -->
                                            <div class="card">
                                                <div class="card-body">




                                                    <!-- Body -->
                                                    <div class="text-center mb-2">

                                                        <!-- Heading -->
                                                        <h2 class="card-title">
                                                            <a class="item-name" href="#">Advertising Tool</a>
                                                        </h2>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio sint exercitationem beatae.
                                                        </p>



                                                        <a href="#!" class="btn btn-primary ">Get</a>

                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">

                                            <!-- Card -->
                                            <div class="card">
                                                <div class="card-body">




                                                    <!-- Body -->
                                                    <div class="text-center mb-2">

                                                        <!-- Heading -->
                                                        <h2 class="card-title">
                                                            <a class="item-name" href="#">Price Comparison</a>
                                                        </h2>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio sint exercitationem beatae.
                                                        </p>



                                                        <a href="#!" class="btn btn-primary ">Get</a>

                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">

                                            <!-- Card -->
                                            <div class="card">
                                                <div class="card-body">




                                                    <!-- Body -->
                                                    <div class="text-center mb-2">

                                                        <!-- Heading -->
                                                        <h2 class="card-title">
                                                            <a class="item-name" href="#">RealRate Design</a>
                                                        </h2>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio sint exercitationem beatae.
                                                        </p>



                                                        <a href="#!" class="btn btn-primary ">Get</a>

                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">

                                            <!-- Card -->
                                            <div class="card">
                                                <div class="card-body">




                                                    <!-- Body -->
                                                    <div class="text-center mb-2">

                                                        <!-- Heading -->
                                                        <h2 class="card-title">
                                                            <a class="item-name" href="#">Website builder</a>
                                                        </h2>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio sint exercitationem beatae.
                                                        </p>



                                                        <a href="#!" class="btn btn-primary ">Get</a>

                                                    </div>



                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">

                                            <!-- Card -->
                                            <div class="card">
                                                <div class="card-body">




                                                    <!-- Body -->
                                                    <div class="text-center mb-2">

                                                        <!-- Heading -->
                                                        <h2 class="card-title">
                                                            <a class="item-name" href="#">Reputation Tool</a>
                                                        </h2>

                                                        <!-- Text -->
                                                        <p class="small text-muted mb-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio sint exercitationem beatae.
                                                        </p>



                                                        <a href="#!" class="btn btn-primary ">Get</a>

                                                    </div>



                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

                            <h6 class="header-pretitle">
                                Overview
                            </h6>

                            <!-- Title -->
                            <h1 class="header-title">
                                Dashboard
                            </h1>

                        </div>
                        <div class="col-auto">

                            <a href="#" data-toggle="modal" data-target="#joinWorkspace" class="btn btn-white lift mr-2">Join </a>
                            <a href="join.php" class="btn btn-primary lift">Get Workspace</a>

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

                <div class="col-12 col-lg-6 col-xl">

                    <!-- Hours -->
                    <div class="card">
                        <div class="card-body">
                            <div class="card-header">

                                <form>
                                    <div class="input-group input-group-flush input-group-merge">

                                        <input id="search_workspace" type="search" class="form-control form-control-prepended search" placeholder="Search workspaces">

                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <span class="fe fe-search"></span>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


        <div class="container-fluid">
            <div class="list row">

                <!-- <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">

                        <div class="card-body">

                            <div class="col-12">

                                <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                    <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                </a>

                                <h2 class="card-title text-center mb-1">
                                    Advertising Tool
                                </h2>
                                <p class="small text-muted mb-3">
                                    Woprking on the latest API integration.
                                </p>

                            </div>

                        </div>

                        <div class="card-footer card-footer-boxed">
                            <div class="row align-items-center">
                                <div class="col">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col-auto">

                                            <div class="small mr-2">33%</div>

                                        </div>
                                        <div class="col">

                                            <div class="progress progress-sm">
                                                <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">

                                    <div class="avatar-group">
                                        <a href="profile-posts.html" class="avatar avatar-xs" data-toggle="tooltip" title="" data-original-title="Ab Hadley">
                                            <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                        <a href="profile-posts.html" class="avatar avatar-xs" data-toggle="tooltip" title="" data-original-title="Adolfo Hess">
                                            <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                        <a href="profile-posts.html" class="avatar avatar-xs" data-toggle="tooltip" title="" data-original-title="Daniela Dewitt">
                                            <img src="assets/img/user-placeholder.jpeg" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div> -->

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">

                        <!-- Body -->
                        <div class="card-body text-center">
                            <div class="col-auto">

                                <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                    <i class="fe fe-settings"></i>
                                </a>

                            </div>


                            <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>

                            <h2 class="card-title text-center mb-1">
                                Advertising Tool
                            </h2>
                            <p class="small text-muted mb-0">
                                Woprking on the latest API integration.
                            </p>


                        </div>

                        <div class="card-footer card-footer-boxed">
                            <div class="row align-items-end ">
                                
                                <div class="col-12 align-items-end justify-content-between d-flex">

                                    <a class="btn btn-sm btn-danger mr-3" href="#" data-toggle="modal">Leave</a>

                                    <a class="btn btn-sm btn-primary" href='https://adv.globres.io' target="_blank" >Go to platform</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">

                        <!-- Body -->
                        <div class="card-body text-center">
                            <div class="col-auto">

                                <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                    <i class="fe fe-settings"></i>
                                </a>

                            </div>


                            <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>

                            <h2 class="card-title text-center mb-1">
                            RealRate Tool

                            </h2>
                            <p class="small text-muted mb-0">
                                Woprking on the latest API integration.
                            </p>


                        </div>

                        <div class="card-footer card-footer-boxed">
                            <div class="row align-items-end ">
                                
                                <div class="col-12 align-items-end justify-content-between d-flex">

                                    <a class="btn btn-sm btn-danger mr-3" href="#" data-toggle="modal">Leave</a>

                                    <a class="btn btn-sm btn-primary" href='https://adv.globres.io' target="_blank" >Go to platform</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">

                        <!-- Body -->
                        <div class="card-body text-center">
                            <div class="col-auto">

                                <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                    <i class="fe fe-settings"></i>
                                </a>

                            </div>


                            <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                            </a>

                            <h2 class="card-title text-center mb-1">
                            Price comparaison

                            </h2>
                            <p class="small text-muted mb-0">
                                Woprking on the latest API integration.
                            </p>


                        </div>

                        <div class="card-footer card-footer-boxed">
                            <div class="row align-items-end ">
                                
                                <div class="col-12 align-items-end justify-content-between d-flex">

                                    <a class="btn btn-sm btn-danger mr-3" href="#" data-toggle="modal">Leave</a>

                                    <a class="btn btn-sm btn-primary" href='https://adv.globres.io' target="_blank" >Go to platform</a>

                                </div>
                            </div>
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