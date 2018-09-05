<template>
<tr>
  <td width="620" align="left" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height:21px; color: #1e1e1e; text-align:left; padding-top:30px; padding-bottom:30px;border-top:1px solid #CCC;">
    <table width="620" border="0" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td width="180" align="left" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height:21px; color: #1e1e1e; text-align:left;">
            <table width="155" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td align="center" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #1e1e1e; padding-top:4px;">
                    <img v-bind:src="'http://www.americanhotel.com/images/banners/reps/300px/' + newHire.lastname + newHire.firstname + '.jpg'" width="155" height="155" alt="" style="display: block; font-size:13px; font-family: Arial, Helvetica, sans-serif; color:#1e1e1e;" border="0" />
                  </td>
                </tr>
                <tr>
                  <td v-if="newHire.isReturning" align="center" valign="top" style="background: #ed1a3b; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #ffffff; font-style: italic;">
                    Welcome Back!
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="440" align="left" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height:21px; color: #1e1e1e;">
            <table width="440" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td align="left" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height:21px; color: #666666; text-align:left; padding-bottom:10px;">
                    <span style="font-weight:bold">{{newHire.firstname}}<span v-if="newHire.preferredname">({{newHire.preferredname}})</span><span v-else>&nbsp;</span>{{newHire.lastname}}</span>
                    <br />
                    {{newHire.title}} &ndash; {{newHire.department}}
                    <br />
                    <span style="font-style: italic">Reports to {{newHire.supervisor}}</span>
                  </td>
                </tr>
                <tr>
                  <td align="left" valign="top" style="background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height:21px; color: #666666; text-align:left;">
                    {{newHire.description}}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</template>

<script>
export default {
  props: {
    newHire: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
