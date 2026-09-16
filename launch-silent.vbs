Set fso = CreateObject("Scripting.FileSystemObject")
Set WshShell = CreateObject("WScript.Shell")

strScriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = strScriptDir

electronExe = strScriptDir & "\node_modules\electron\dist\electron.exe"

' If direct electron.exe exists, run directly with 0 console window
If fso.FileExists(electronExe) Then
    WshShell.Run """" & electronExe & """ .", 0, False
Else
    WshShell.Run "cmd /c npx electron .", 0, False
End If
