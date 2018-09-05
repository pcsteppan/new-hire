<template>
<table width="100%" cellpadding="0" cellspacing="20" border="0" id="backgroundTable" style="background: #ffffff; width: 100% !important; margin: 0; padding: 0;" bgcolor="#ffffff">
  <tr>
    <td valign="top" align="center">
      <!-- START MAIN TABLE -->
      <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
        <!-- START ROW -->
        <tr>
          <td align="center" valign="top" style="background: #ffffff; padding-bottom:20px; border-top:1px solid #CCCCCC; border-left:1px solid #CCCCCC; border-right:1px solid #CCCCCC;">
            <!-- START CONTENT TABLE -->
            <table width="620" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <!-- START ROW -->
                <tr>
                  <td align="center" valign="top" style="background: #ffffff; padding-top:40px; padding-bottom:20px;">
                    <!-- START TEXT TABLE -->
                    <table width="620" border="0" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #666666; text-align:center; font-weight:bold; padding-bottom:8px; text-transform:uppercase;">Welcome to American Hotel</td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 40px; color: #005da4; text-align:center; font-weight:bold; letter-spacing:1px; padding-bottom:7px; ">Our New Associates</td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height:21px; color: #666666; text-align:center;">We are pleased to introduce you to our newest associates.<br /> Please say hello to… </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- END TEXT TABLE -->
                  </td>
                </tr>
                <!-- END ROW -->
                <NewHirePreviewList
                  :newHires=newHires
                />
              </tbody>
            </table>
            <!-- END CONTENT TABLE -->
          </td>
        </tr>
        <!-- END ROW -->
      </table>
      <!-- END MAIN TABLE -->
    </td>
  </tr>
</table>
</template>

<script>
import NewHirePreviewList from '@/components/NewHirePreviewList.vue'

export default {
  components: {
    NewHirePreviewList
  },
  props: {
    newHires: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>
