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

                                    <h2 class="header-title">
                                        Advertising Tool
                                    </h2>
                                    <h6 class="header-pretitle">
                                        Workspace
                                    </h6>

                                </div>
                                <div class="col-auto">

                                    <a href="#!" class="btn btn-m btn-primary ">
                                        <span class="fe fe-link mr-2"></span> Go to platform
                                    </a>
                                </div>

                            </div>

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

                                <div class="tab-pane fade show active px-7" id="Users" role="tabpanel" aria-labelledby="Users-tab">

                                    <div class="row align-items-center mb-3">
                                        <div class="col">


                                            <h1 class="header-title">
                                                Users
                                            </h1>

                                        </div>
                                        <div class="col-auto">
                                            <a href="#!" data-toggle="modal" data-target="#joinWorkspace" class="btn btn-light"> <span class="fe fe-user-plus mr-2"></span>Add users</a>
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

                                    <div id="accordion" class='mt-4'>
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
                                                                <div class='col'>
                                                                    <label class="mb-1">
                                                                            Module Builder
                                                                        </label>

                                                                    <small class="form-text text-muted">
                                                                            Publish as admin
                                                                        </small>
                                                                </div>

                                                                <div class="col-auto">
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="enable_builder">
                                                                        <label class="custom-control-label" for="enable_builder"></label>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="col-12 pl-6 row sub_access enable_builder">
                                                            <div class="col-12">
                                                                <div class="form-group row align-items-center mb-1">
                                                                    <div class='col'>
                                                                        <label class="mb-1">
                                                                                Designer
                                                                            </label>

                                                                        <small class="form-text text-muted">
                                                                                Publish as admin
                                                                            </small>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="custom-control custom-switch">
                                                                            <input type="checkbox" class="custom-control-input" id="b1-1" checked>
                                                                            <label class="custom-control-label" for="b1-1"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row align-items-center mb-1">
                                                                    <div class='col'>
                                                                        <label class="mb-1">Publisher</label>

                                                                        <small class="form-text text-muted">Publish as admin</small>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="custom-control custom-switch">
                                                                            <input type="checkbox" class="custom-control-input" id="b1-2" checked>
                                                                            <label class="custom-control-label" for="b1-2"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row align-items-center mb-1">
                                                                    <div class='col'>
                                                                        <label class="mb-1">
                                                                                Marketer
                                                                            </label>

                                                                        <small class="form-text text-muted">
                                                                                Publish as admin
                                                                            </small>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="custom-control custom-switch">
                                                                            <input type="checkbox" class="custom-control-input" id="b1-3" checked>
                                                                            <label class="custom-control-label" for="b1-3"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class='col'>
                                                                    <label class="mb-1">
                                                                            Module Analytics
                                                                        </label>

                                                                    <small class="form-text text-muted">
                                                                            Making your profile public means that anyone on the platforms
                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="enable_analytics">
                                                                        <label class="custom-control-label" for="enable_analytics"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-6 row sub_access enable_analytics">
                                                            <div class="col-12">
                                                                <div class="form-group row align-items-center mb-1">
                                                                    <div class='col'>
                                                                        <label class="mb-1">Marketer</label>

                                                                        <small class="form-text text-muted">Publish as admin</small>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="custom-control custom-switch">
                                                                            <input type="checkbox" class="custom-control-input" id="b1-2" checked>
                                                                            <label class="custom-control-label" for="b1-2"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row align-items-center mb-1">
                                                                    <div class='col'>
                                                                        <label class="mb-1">
                                                                                Analist
                                                                            </label>

                                                                        <small class="form-text text-muted">
                                                                                Publish as admin
                                                                            </small>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="custom-control custom-switch">
                                                                            <input type="checkbox" class="custom-control-input" id="b1-3" checked>
                                                                            <label class="custom-control-label" for="b1-3"></label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class='col'>
                                                                    <label class="mb-1">
                                                                            Module Emailing
                                                                        </label>

                                                                    <small class="form-text text-muted">
                                                                            Making your profile public means that anyone on the platforms n
                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">

                                                                    <!-- Switch -->
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u1-3" checked>
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
                                                                <div class='col'>
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
                                                                <div class='col'>
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
                                                                <div class='col'>
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
                                                                        <input type="checkbox" class="custom-control-input" id="u2-2" checked>
                                                                        <label class="custom-control-label" for="u2-2"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center">
                                                                <div class='col'>
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
                                                                <div class='col'>
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
                                                                <div class='col'>
                                                                    <label class="mb-1">
                                                                            Module 1 
                                                                        </label>

                                                                    <small class="form-text text-muted">
                                                                            Publish as admin
                                                                        </small>
                                                                </div>


                                                                <div class="col-auto">
                                                                    <div class="custom-control custom-switch">
                                                                        <input type="checkbox" class="custom-control-input" id="u3-1" checked>
                                                                        <label class="custom-control-label" for="u3-1"></label>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="col-12 pl-4">

                                                            <div class="form-group row align-items-center mb-1">
                                                                <div class='col'>
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
                                                                <div class='col'>
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
                                                                <div class='col'>
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

    <div class="modal fade account" id="joinWorkspace" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-card card">
                    <div class="card-header justify-content-end border-0">
                        <h2 class="mb-1">Invite a member</h2>

                        <button type="button" class="close btn btn-icon btn-sm" data-dismiss="modal" aria-label="Close">
                            <span class="fe fe-x"></span>
                        </button>

                    </div>

                    <div class="card-body mx-0">

                        <p class="text-gray-700 small mb-1">Share this link with others to grant access to your workspace!</p>
                        <div class="input-group input-group-merge">
                            <input class="form-control form-control-lg form-control-appended" id="foo" type="text" value="https://join.globres.io/2Khdsi">
                            <div class="input-group-append ">
                                <div class="input-group-text p-0">
                                    <button class="btn btn-primary mr-1" type="button" id="copyLink" data-clipboard-demo="" data-clipboard-target="#foo">
                                        <!-- <i class="fe fe-copy"></i> -->
                                        Copy
                                    </button>
                                </div>

                            </div>
                        </div>


                        <p class="text-muted small mt-1">Your invite link expires in 7 days.</p>

                        <div class="col text-right mt-3 d-flex justify-content-between align-items-center p-0">

                            <div class="custom-control custom-checkbox checklist-control" tabindex="0">
                                <input class="custom-control-input" id="neverExpire" type="checkbox">
                                <label class="custom-control-label" for="neverExpire"></label>
                                <span class="custom-control-caption text-muted">
                                    Set this link to never expire
                                </span>
                            </div>

                            <button class="btn btn-outline-secondary" data-toggle="modal" href="#invitationSettings"><i class="fe fe-settings text-primary"></i></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="modal" id="invitationSettings" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-card card">
                    <div class="card-header justify-content-end border-0">
                        <h2 class="mb-1">Workspace Invite Settings</h2>

                        <button type="button" class="close btn btn-icon btn-sm" data-dismiss="modal" aria-label="Close">
                            <span class="fe fe-x"></span>
                        </button>

                    </div>

                    <div class="card-body mx-0">
                        <div class="row">
                            <!-- <div class="col-12">

                                <div class="form-group">

                                    <label>Expire After</label>

                                    <select class="custom-select mb-3" data-toggle="select">
                                        <option>30 mintutes</option>
                                        <option>1 hour</option>
                                        <option>6 hours</option>
                                        <option>12 hours</option>
                                        <option>1 day</option>
                                        <option selected>7 days</option>
                                        <option>Never</option>
                                    </select>
                                </div>

                            </div> -->

                            <div class="col-12 p-0">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4>
                                                Partial access
                                            </h4>
                                        </div>

                                        <div class="col-12 pl-4">

                                            <div class="form-group row align-items-center mb-1">
                                                <div class='col'>
                                                    <label class="mb-1">
                                                            Module Builder
                                                        </label>

                                                    <small class="form-text text-muted">
                                                            Publish as admin
                                                        </small>
                                                </div>

                                                <div class="col-auto">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="enable_builder">
                                                        <label class="custom-control-label" for="enable_builder"></label>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-12 pl-6 row sub_access enable_builder">
                                            <div class="col-12">
                                                <div class="form-group row align-items-center mb-1">
                                                    <div class='col'>
                                                        <label class="mb-1">
                                                                Designer
                                                            </label>

                                                        <small class="form-text text-muted">
                                                                Publish as admin
                                                            </small>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="b1-1" checked>
                                                            <label class="custom-control-label" for="b1-1"></label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row align-items-center mb-1">
                                                    <div class='col'>
                                                        <label class="mb-1">Publisher</label>

                                                        <small class="form-text text-muted">Publish as admin</small>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="b1-2" checked>
                                                            <label class="custom-control-label" for="b1-2"></label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row align-items-center mb-1">
                                                    <div class='col'>
                                                        <label class="mb-1">
                                                                Marketer
                                                            </label>

                                                        <small class="form-text text-muted">
                                                                Publish as admin
                                                            </small>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="b1-3" checked>
                                                            <label class="custom-control-label" for="b1-3"></label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 pl-4">

                                            <div class="form-group row align-items-center mb-1">
                                                <div class='col'>
                                                    <label class="mb-1">
                                                            Module Analytics
                                                        </label>

                                                    <small class="form-text text-muted">
                                                            Making your profile public means that anyone on the platforms
                                                        </small>
                                                </div>


                                                <div class="col-auto">

                                                    <!-- Switch -->
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="enable_analytics">
                                                        <label class="custom-control-label" for="enable_analytics"></label>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="col-12 pl-6 row sub_access enable_analytics">
                                            <div class="col-12">
                                                <div class="form-group row align-items-center mb-1">
                                                    <div class='col'>
                                                        <label class="mb-1">Marketer</label>

                                                        <small class="form-text text-muted">Publish as admin</small>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="b1-2" checked>
                                                            <label class="custom-control-label" for="b1-2"></label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row align-items-center mb-1">
                                                    <div class='col'>
                                                        <label class="mb-1">
                                                                Analist
                                                            </label>

                                                        <small class="form-text text-muted">
                                                                Publish as admin
                                                            </small>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="b1-3" checked>
                                                            <label class="custom-control-label" for="b1-3"></label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 pl-4">

                                            <div class="form-group row align-items-center">
                                                <div class='col'>
                                                    <label class="mb-1">
                                                            Module Emailing
                                                        </label>

                                                    <small class="form-text text-muted">
                                                            Making your profile public means that anyone on the platforms n
                                                        </small>
                                                </div>


                                                <div class="col-auto">

                                                    <!-- Switch -->
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="u1-3" checked>
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
                                                <div class='col'>
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
                                <!-- <div class="form-group">

                                    <label>Max Number of Uses</label>

                                    <select class="custom-select mb-3" data-toggle="select">
                                        <option>1 use</option>
                                        <option>5 uses</option>
                                        <option>10 uses</option>
                                        <option>25 uses</option>
                                        <option>50 uses</option>
                                        <option>No Limit</option>
                                    </select>
                                </div> -->

                            </div>
                            <p class="text-muted">
                                Temporary members are automatically kicked when they disconnect unless a role has been assigned
                            </p>
                        </div>


                        <div class="col text-right mt-3  p-0">
                            <button class="btn btn-outline-secondary mr-3" data-dismiss="modal" aria-label="Close">Cancel</button>
                            <button class="btn btn-primary">Create a New Link</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- <div class="modal fade" id="joinWorkspace" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-card card" data-list="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                    <div class="card-header">

                        <h4 class="card-header-title text-muted" id="exampleModalCenterTitle">
                            Invite a member to <strong class="text-primary">Advertising Tool</strong>
                        </h4>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fe fe-x"></span>
                      </button>

                    </div>
                    <div class="card-header">
                        <p class="text-muted mb-4">
                            Customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options powered by Select2. You can pass any options supported by the plugin via the <code>data-options</code>                            attribute. The value must be a valid JSON object. Please read the <a target="_blank" href="https://select2.org/">official plugin documentation</a> for a full list of options.
                        </p>
                       

                    </div>
                    <div class="card-body">



                    </div>
                </div>
            </div>
        </div>
    </div> -->


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

                            <a href="#" data-toggle="modal" data-target="#joinWorkspace" class="btn btn-white lift mr-2">Invite </a>
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

            <div class="row align-items-center mb-4">
                <div class="col">

                    <!-- Form -->
                    <form>
                        <div class="input-group input-group-lg input-group-merge">
                            <input class="list-search form-control form-control-prepended" type="search" placeholder="Search">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <span class="fe fe-search"></span>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <!-- <div class="col-1 mr-n3">

        <form>
            <select class="custom-select custom-select-sm form-control-flush">
                <option value="1" selected="">9 per page</option>
                <option value="5">All</option>
            </select>

        </form>

    </div> -->
                <div class="col-auto">

                    <div class="nav btn-group d-inline-flex" role="tablist">
                        <button class="btn btn-white active" id="contactsCardsTab-tab" data-toggle="tab" href="#contactsCardsTab" role="tab" aria-controls="contactsCardsTab" aria-selected="true">
                            <span class="fe fe-grid"></span>
                        </button>
                        <button class="btn btn-white" id="contactsListTab-tab" data-toggle="tab" href="#contactsListTab" role="tab" aria-controls="contactsListTab" aria-selected="false">
                            <span class="fe fe-list"></span>
                        </button>
                    </div>

                </div>
            </div>

        </div>





        <div class="container-fluid">

            <div class="tab-content">
                <div class="tab-pane fade active show" id="contactsCardsTab" role="tabpanel" aria-labelledby="contactsCardsPane-tab">
                    <div class="list row">

                        <div class="col-12 col-md-6 col-xl-3">
                            <div class="card">

                                <!-- Body -->
                                <div class="card-body text-center">
                                    <div class="col-auto">

                                        <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                            <i class="fe fe-settings text-primary"></i>
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
                                    <div class="row align-items-center">
                                        <div class="col">

                                            <!-- Title -->
                                            <h6 class="text-uppercase text-muted mb-2">
                                                Seats used
                                            </h6>

                                            <!-- Heading -->
                                            <span class="h2 mb-0">
                                            4 out of 6
                                          </span>

                                        </div>
                                        <div class="col-auto">

                                            <!-- Icon -->
                                            <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a>

                                        </div>
                                    </div>
                                </div>
                                <!-- / .card-body -->

                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-3">
                            <div class="card">

                                <!-- Body -->
                                <div class="card-body text-center">
                                    <div class="col-auto">

                                        <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                            <i class="fe fe-settings text-primary"></i>
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
                                    <div class="row align-items-center">
                                        <div class="col">

                                            <!-- Title -->
                                            <h6 class="text-uppercase text-muted mb-2">
                                                Seats used
                                            </h6>

                                            <!-- Heading -->
                                            <span class="h2 mb-0">
                                            2 out of 2
                                          </span>

                                        </div>
                                        <div class="col-auto">

                                            <!-- Icon -->
                                            <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a>

                                        </div>
                                    </div>
                                </div>
                                <!-- / .card-body -->

                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-3">
                            <div class="card">

                                <!-- Body -->
                                <div class="card-body text-center">
                                    <div class="col-auto">

                                        <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                            <i class="fe fe-settings text-primary"></i>
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
                                    <div class="row align-items-center">
                                        <div class="col">

                                            <!-- Title -->
                                            <h6 class="text-uppercase text-muted mb-2">
                                                Seats used
                                            </h6>

                                            <!-- Heading -->
                                            <span class="h2 mb-0">
                                            illimited 
                                          </span>

                                        </div>
                                        <div class="col-auto">

                                            <!-- Icon -->
                                            <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a>

                                        </div>
                                    </div>
                                </div>
                                <!-- / .card-body -->

                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-3">
                            <div class="card">

                                <!-- Body -->
                                <div class="card-body text-center">
                                    <div class="col-auto">

                                        <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                            <i class="fe fe-settings text-primary"></i>
                                        </a>

                                    </div>


                                    <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                    </a>

                                    <h2 class="card-title text-center mb-1">
                                        Reputation Tool
                                    </h2>
                                    <p class="small text-muted mb-0">
                                        Woprking on the latest API integration.
                                    </p>


                                </div>

                                <div class="card-footer card-footer-boxed">
                                    <div class="row align-items-center">
                                        <div class="col">

                                            <!-- Title -->
                                            <h6 class="text-uppercase text-muted mb-2">
                                                Seats used
                                            </h6>

                                            <!-- Heading -->
                                            <span class="h2 mb-0">
                                            7 out of 10
                                          </span>

                                        </div>
                                        <div class="col-auto">

                                            <!-- Icon -->
                                            <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a>

                                        </div>
                                    </div>
                                </div>
                                <!-- / .card-body -->

                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-3">
                            <div class="card">

                                <!-- Body -->
                                <div class="card-body text-center">
                                    <div class="col-auto">

                                        <a href="#setting_workspace" data-toggle="modal" class="dropdown-ellipses dropdown-toggle" style="float:right">
                                            <i class="fe fe-settings text-primary"></i>
                                        </a>

                                    </div>


                                    <a href="#" class="card-avatar avatar avatar-lg mx-auto">
                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                    </a>

                                    <h2 class="card-title text-center mb-1">
                                        Website Builder
                                    </h2>
                                    <p class="small text-muted mb-0">
                                        Woprking on the latest API integration.
                                    </p>


                                </div>

                                <div class="card-footer card-footer-boxed">
                                    <div class="row align-items-center">
                                        <div class="col">

                                            <!-- Title -->
                                            <h6 class="text-uppercase text-muted mb-2">
                                                Seats used
                                            </h6>

                                            <!-- Heading -->
                                            <span class="h2 mb-0">
                                            1 out of 3
                                          </span>

                                        </div>
                                        <div class="col-auto">

                                            <!-- Icon -->
                                            <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a>

                                        </div>
                                    </div>
                                </div>
                                <!-- / .card-body -->

                            </div>
                        </div>


                    </div>
                </div>
                <div class="tab-pane fade" id="contactsListTab" role="tabpanel" aria-labelledby="contactsListTab-tab">
                    <div class="row">
                        <div class="col-12 col-xl-12">


                            <div class="card">
                                <div class="card-header">

                                    <h4 class="card-header-title">
                                        List of workspaces
                                    </h4>

                                </div>
                                <div class="table-responsive mb-0">
                                    <table class="table table-sm table-nowrap card-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Name
                                                </th>

                                                <th>
                                                    Last activity
                                                </th>
                                                <th>
                                                    Seats used
                                                </th>
                                                <th>
                                                    Settings
                                                </th>
                                                <th>
                                                    Platfrom
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>

                                                    <div class="avatar avatar-sm d-inline-block mr-2">
                                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                                    </div>
                                                    <span>Advertising Tool</span>

                                                </td>

                                                <td>
                                                    22 Jan 2021 - 09:29:54
                                                </td>
                                                <td>
                                                    4 out of 6
                                                </td>
                                                <td>
                                                    <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a> </td>
                                                <td>
                                                    <a class="btn btn-sm btn-primary" href="#setting_workspace" data-toggle="modal">Settings</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <div class="avatar avatar-sm d-inline-block mr-2">
                                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                                    </div>
                                                    <span>Price comparaison                                                    </span>

                                                </td>

                                                <td>
                                                    22 Jan 2021 - 09:29:54
                                                </td>
                                                <td>
                                                    2 out of 2
                                                </td>
                                                <td>
                                                    <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a> </td>
                                                <td>
                                                    <a class="btn btn-sm btn-primary" href="#setting_workspace" data-toggle="modal">Settings</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <div class="avatar avatar-sm d-inline-block mr-2">
                                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                                    </div>
                                                    <span>RealRate Tool
                                                    </span>

                                                </td>

                                                <td>
                                                    22 Jan 2021 - 09:29:54
                                                </td>
                                                <td>
                                                    illimited
                                                </td>
                                                <td>
                                                    <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a> </td>
                                                <td>
                                                    <a class="btn btn-sm btn-primary" href="#setting_workspace" data-toggle="modal">Settings</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <div class="avatar avatar-sm d-inline-block mr-2">
                                                        <img src="https://mir-s3-cdn-cf.behance.net/user/115/6e35d422123289.5a5a7067d5efa.jpg" alt="..." class="avatar-img rounded-circle">
                                                    </div>
                                                    <span>Reputation Tool                                                    </span>

                                                </td>

                                                <td>
                                                    22 Jan 2021 - 09:29:54
                                                </td>
                                                <td>
                                                    7 out of 10

                                                </td>
                                                <td>
                                                    <a class="btn btn-sm btn-outline-primary" href="https://adv.globres.io" target="_blank">Go to Platform</a> </td>
                                                <td>
                                                    <a class="btn btn-sm btn-primary" href="#setting_workspace" data-toggle="modal">Settings</a>
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>


    <!-- Map -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>

    <!-- Theme JS -->
    <script>
        jQuery("#enable_builder").on("change", function() {
            var _this = jQuery(this);
            if (_this.is(":checked")) {
                jQuery(".enable_builder").slideDown()
            } else {
                jQuery(".enable_builder").slideUp()
            }
        });

        jQuery("#enable_analytics").on("change", function() {
            var _this = jQuery(this);
            if (_this.is(":checked")) {
                jQuery(".enable_analytics").slideDown()
            } else {
                jQuery(".enable_analytics").slideUp()
            }
        });

        var clipboard = new ClipboardJS('#copyLink', {});

        clipboard.on('success', function(e) {
            console.log(e);
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger.textContent);
            e.trigger.textContent = "Copied";
            e.trigger.classList.add("btn-success");
            setTimeout(() => {
                e.trigger.textContent = "Copy";
                e.trigger.classList.remove("btn-success");
            }, 1000);
            // e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger.text());
        });

        // jQuery('.custom-select').select2();
    </script>


</body>

</html>